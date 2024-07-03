import './IEGraph.css';
import { Chart } from "react-chartjs-2";
import 'chart.js/auto';
import {incomes, expenses, axisVal} from "./data.js"

function IEGraph(){

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const incomeBackground = ["lightgreen"];
    const expenseBackground = ["lightcoral"];

    const data = { 
        labels: monthNames,
        datasets: [
            {
                label: "Income",
                data: incomes,
                backgroundColor: incomeBackground,
                borderWidth: 0.5,
            },
            {
                label: "Expense",
                data: expenses,
                backgroundColor: expenseBackground,
                borderWidth: 0.5, 
            }
        ],
    }

    const options = {
        scales:{
            y:{
                max: axisVal,
            }
        }
    }

    return(
        <>
            <div id="iegraph-main">
                <Chart
                    type='bar'
                    data={data}
                    options={options}
                />
            </div>
        </>
    )
}

export default IEGraph