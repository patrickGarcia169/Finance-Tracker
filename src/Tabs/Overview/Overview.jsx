import * as data from './data'
import './Overview.css'
import { useState } from 'react'
import Header from '../../Header/Header'
import Graphs from './Graphs'
import PieChart from './PieChart'
import {colors, totSaved} from './data.js'

function Overview(){

    let indexNum = colors[colors.length-1] === "LightGreen" ? 1 : 2;
    let [toggleState, setToggleState] = useState(indexNum);

    const change = (indexNum) => {
        setToggleState(index);
    }

    return(
        <>  
            <Header/>
            <div id="overview-main">
                <div id="graphs">
                    <Graphs/>
                </div>
                <div id="flex">
                    <div id="piechart">
                        <PieChart/>
                    </div>
                    <div id="summary">
                        <p className={toggleState === 1 ? 'text-active' : 'text-inactive'}>
                            Congratulations! You have saved ${totSaved} this year. Keep it up!
                        </p>
                        <p className={toggleState === 2 ? 'text-active' : 'text-inactive'}>
                            Uh oh! You overspent by ${totSaved}. You need to spend less.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview