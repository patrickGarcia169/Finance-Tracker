import './BEGraph.css';
import { Chart } from "react-chartjs-2";
import 'chart.js/auto';
import {budgets, expenses} from "./data.js"

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

    return(
        <>
            <div id="begraph-main">
                <Chart
                    type='bar'
                    data={data}
                />
            </div>
        </>
    )
}

export default BEGraph