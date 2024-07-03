import './BEGraph.css';
import { Chart } from "react-chartjs-2";
import 'chart.js/auto';
import {budgets, expenses, axisVal} from "./data.js"

function BEGraph(){

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const budgetBackground = ["gold"];
    const expenseBackground = ["lightcoral"];

    const data = { 
        labels: monthNames,
        datasets: [
            {
                label: "Budget",
                data: budgets,
                backgroundColor: budgetBackground,
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
            <div id="begraph-main">
                <Chart
                    type='bar'
                    data={data}
                    options={options} 
                />
            </div>
        </>
    )
}

export default BEGraph