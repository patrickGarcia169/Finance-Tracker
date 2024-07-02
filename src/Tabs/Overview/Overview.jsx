import * as data from './data'
import './Overview.css'
import Header from '../../Header/Header'
import Graphs from './Graphs'

function Overview(){

    return(
        <>  
            <Header/>
            <div id="overview-main">
                <div id="graphs">
                    <Graphs/>
                </div>
                <div id="flex">
                    <div id="piechart">
                        <p>Pie Chart</p>
                    </div>
                    <div id="summary">
                        <p>Summary</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview