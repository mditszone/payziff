import React from 'react';
import Card from '../components/card';
import PieChart from '../components/chart_pie';
import {GiProfit} from 'react-icons/gi';
import {BsPersonBadge} from 'react-icons/bs';
import {MdOutlineSmsFailed, MdPending} from 'react-icons/md';
import '../styles/welcome.scss'
import  BarChart  from '../components/chart_bar';
import  LineChart  from '../components/chart_line';
import { Bar, Line } from 'react-chartjs-2';
import { apiRequest } from '../services/generic.service';


/*
    - contains cards and chart
    - everytime load page, need get current data from backend and show as cards
    - 4 cards
    - one chart

*/

export default function Welcome(props) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [chartData, setChartData] = React.useState({
        labels,
        datasets: [
            {
            label: 'FAILED',
            data: [1, 2, 3, 1, 5, 6, 4],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'SUCCESS',
            data: [1, 2, 3, 1, 5, 6, 4],
            backgroundColor: 'rgba(255, 199, 132, 0.5)',
            },
            {
                label: 'PENDINS',
                data: [1, 2, 3, 1, 5, 6, 4],
                backgroundColor: 'rgba(25, 99, 132, 0.5)',
            }
        ],
    });

    const arr = [{name: "Merchants", count: 106, icon: <BsPersonBadge />}, 
    {name: "Success Transactions", count: "50,000", icon: <GiProfit />}, 
    {name: "Pending Trasactions", count: "156", icon: <MdPending />}, {name: "Failed Transactions", count: 12, icon: <MdOutlineSmsFailed />}];
    

    const optionChangeHandler = (event) => {
        console.log(event.target.value);
        let value = event.target.value;
        if (value != "select") {
            if (value == "monthly") {

            }
            if (value == "daily") {
                const month = new Date().getMonth() + 1;
                console.log(month);
                apiRequest(`/transactions/getTransactionsByMonth/${month}`)
                .then((res) => {
                    let arr = [];
                    Array(31).fill(0).forEach((v, i) => {
                        const index = res.data.findIndex(obj => obj.day == i);
                        if (index > -1) {
                            arr.push(res.data[index]);
                        } else {
                            arr.push({
                                "day": i,
                                "orderAmount": 0
                            })
                        }
                    });
                    console.log(arr);
                    let labels = arr.map(obj => obj.day);
                    const data = {
                        labels,
                        datasets: [
                            {
                                label: 'Today Statitics',
                                data: arr.map(obj => obj.orderAmount),
                                backgroundColor: 'rgba(120, 195, 152, 0.9)',
                            }
                        ],
                    };
                    setChartData(data);
                });
            }
        }
    }


    return(
        <div className="pz-welcome">
            <div className='pz-cards'>
                {arr.map((item, i)=> <Card key={i} id={`card${i}`} title={item.name} count={item.count} icon={item.icon} />)}
            </div>
            <div className='pz-chart-container'>
                <div>
                    <select onChange={optionChangeHandler} >
                    <option value="select">Select</option>
                        <option value="today">Today</option>
                        <option value="daily">Daily</option>
                        <option value="monthly">Month</option>
                    </select>
                </div>
                <div className='charts'>
                    <div className='chart'>
                        <BarChart data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
}