import Header from "../../Header/Header";
import './Settings.css'
import { Link } from 'react-router-dom'

function Settings(){
    return(
        <>
            <Header/>
            <div id="settings-main">
                
                <ul id="settings-box">
                    <li><Link className="setting" to="/settings/change-un">
                    Change Username</Link></li>
                    <li className="setting">Change Password</li>
                    <li className="setting">Change Profile Picture</li>
                    <li className="setting" id="out">Sign Out</li>
                </ul>
                
            </div>
        </>
    )
}

export default Settings