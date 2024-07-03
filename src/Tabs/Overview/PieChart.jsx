import './PieChart.css';
import { Chart } from "react-chartjs-2";
import 'chart.js/auto';
import {categories, catTotals, colors} from "./data.js"

function PieChart(){

    const data ={
        datasets: [
            {
                data: catTotals,
                backgroundColor: colors,
            }
        ],
        labels: categories,
    }

    return(
        <>
            <div id="piechart-main">
            <Chart id='piechart'
                    type='pie'
                    data={data}
                />
            </div>
        </>
    )
}

export default PieChart