import './Graphs.css';
import { useState } from "react";
import IEGraph from './IEGraph';
import BEGraph from './BEGraph';

function Graphs(){

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <>
        <div id='graphs-main'>
            {/*Tabs*/}
            <div id='tabs'>
                <div className={toggleState === 1 ? 'tab t-active' : 'tab'} 
                    onClick={() => toggleTab(1)}>
                    Income
                </div>
                <div className={toggleState === 2 ? 'tab t-active' : 'tab'} 
                    onClick={() => toggleTab(2)}>
                    Budget
                </div>
            </div>

            {/*Content*/}
            <div className={toggleState === 1 ? 'content c-active' : 'content'}>
                <h2>Income to Expenses</h2>
                <IEGraph/>
            </div>
            <div className={toggleState === 2 ? 'content c-active' : 'content'}>
                <h2>Budget to Expenses</h2>
                <BEGraph/>
            </div>
        </div>
        </>
    )
}

export default Graphs