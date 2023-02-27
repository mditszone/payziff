import React from 'react';
import '../styles/transaction_card.scss';


export default function TransactionCard(props) {
    console.log("prop", props.data)
    return (
        <div className="pz-transaction-card">
            <div className="pz-data-row">
            <div className="header">
                <span className='key'>OrderID: </span>
                <span className='value'>{props.header}</span>
            </div>
            <div className='body'>
                {
                    props.data.map(item => <Row key={1} name={item[0]} value={item[1]} />)
                }
            </div>
        </div>
        </div>
    );
}


function Row(props) {
    return(
        <div className="pz-data-row">
            <div className="row">
                <span className='key'>{props.name}</span>
                <span className='value'>:  {props.value}</span>
            </div>
        </div>
    );
}