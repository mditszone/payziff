import React, { createContext } from 'react';
import { useNavigate } from "react-router-dom";
import PaginatedItems from '../components/table_view';
import { MerchantActions } from '../components/actions';
import TransactionCard from '../components/transaction_card';
import { SuperAdminContext } from '../App';
import { apiRequest } from '../services/generic.service';
import '../styles/merchant_services.scss';
import { useContext } from 'react';
import { useAuth } from '../app/auth';
export const MerchantStorage = createContext();

export default function MerchantServices() {
  const [data, setData] = React.useState([["Venkat", "4563245668998", "HDFC12456", <MerchantActions />]]);
  const [cardData, setCardData] = React.useState([]);
  const columns = ["ID", "MERCHANT NAME", "EMAIL", "PHONE", "CREATED AT", "UPDATED AT", "ACTIONS"];
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const storage = useContext(SuperAdminContext);

  const buttonHandler = (index) => {
    navigate("/dashboard/merchantRegistration");
  }
  

  const onViewHandler = (userId) => {
    apiRequest(`/getMerchantById/${userId}`)
    .then()
  }

  React.useEffect(() => {
    console.log("test");
    apiRequest("/user/getAllMerchants")
      .then(async (json) => {
        let responseData = [];
        setCardData(json.data);
        json.data.forEach((item, i) => {
          let arr = Object.values(item);
          arr.push(<MerchantActions key={`action${i}`} userId={item.id}  />)
          responseData.push(arr);
        });
        setData(responseData);
      }).catch(error => console.log(error));
  }, []);


  return (
    <div>
      <div className='pz-merchant'>
        <PaginatedItems
          itemsPerPage={7}
          items={data}
          columns={columns}
          buttonName="Add Merchant"
          header="Merchants List"
          buttonDisplay={true}
          onClick={buttonHandler}
        />
      </div>
      <div className='cards'>
        {cardData.map((item, i) => {
          const val = Object.entries(item);
          return <TransactionCard key={`card${i}`} data={val} />
        })}
      </div>
    </div>
  );

}