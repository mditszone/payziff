import React from 'react';
import TransactionCard from '../components/transaction_card';
import {TransActions} from '../components/actions';
import PaginatedItems from '../components/table_view';
import * as api from '../services/transaction.services';


import '../styles/merchant_services.scss';
import '../styles/transaction_card.scss';

export default function TransactionServices() {
    const columns = ["Order ID", "Amount", "Status", "Created At", "Updated At", "Actions"];
    const [data, setData] = React.useState([]);
    const [cardData, setCardData] = React.useState([]);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        api.getTransactions().then((json) => {
            let responseData = [];
            json.data.forEach(item => {
                let arr = Object.values(item);
                arr.push(<TransActions />)
                responseData.push(arr);
            });
            setData(responseData);
            setCardData(json.data);
        }).catch((e) => setError(true));
    }, []);

    return error ? <p>Unable to fetch data</p> : (
        <div>
            <div className='pz-merchant'>
                <PaginatedItems 
                    itemsPerPage={3}
                    items={data}
                    columns={columns}
                    buttonDisplay={false}
                    header="Transactions List"
                /> 
            </div>
            <div className='cards'>
                {cardData.map((item, i) => {
                    const data = Object.entries(item);
                    console.log("data", data);
                    return <TransactionCard key={i} data={data} />
                })}
            </div>
        </div>
    );
}

