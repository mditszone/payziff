import React, {createContext} from 'react';
import { useNavigate } from "react-router-dom";
import PaginatedItems from '../components/table_view';
import {MerchantActions} from '../components/actions';
import TransactionCard from '../components/transaction_card';
import { SuperAdminContext } from '../App';

import '../styles/merchant_services.scss';
import { apiRequest } from '../services/generic.service';

export const MerchantStorage = createContext();

export default function StaffManagement() {
    const [data, setData] = React.useState([["Venkat", "4563245668998", "HDFC12456", <MerchantActions />]]);
    const [cardData, setCardData] = React.useState([]);
    const columns = ["ID", "Merchant Name", "Email", "Phone", "Created At", "Updated At", "Actions"];
    const navigate = useNavigate();
    const storage = React.useContext(SuperAdminContext);
    storage.MERCHANT_REGISTRATION = false;


    const buttonHandler = (index) => {
      navigate("/dashboard/staffRegistration");
    }

    React.useEffect(() => {
      apiRequest("/user/getAllStaff")
      .then(async (json) => {
          let responseData = [];
          setCardData(json.data);
          json.data.forEach((item, i) => {
            let arr = Object.values(item);
            arr.push(<MerchantActions index={arr[0]} key={`action${i}`} />)
            responseData.push(arr);
          });
          setData(responseData);
      }).catch(error => console.log(error));
  }, [])


    return (
      <MerchantStorage.Provider value={data}>
        <div>
        <div className='pz-merchant'>
       <PaginatedItems 
            itemsPerPage={3}
            items={data}
            columns={columns}
            buttonName="Add Staff"
            header="Staff List"
            buttonDisplay={true}
            onClick={buttonHandler}
        />
        </div>
        <div className='cards'>
          {console.log("card", cardData)}
                {cardData.map((item, i) => {
                    const val = Object.entries(item);
                    return <TransactionCard key={`item${i}`} data={val} />
                })}
          </div>
      </div>
      </MerchantStorage.Provider>
    )

}