import './Header.css'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <>
            <div id='header-main'>
                <div>
                    
                    <img src="/assets/ServerPic.jpg" alt="Profile Picture"/>
                    
                    <p>Welcome, User!</p>
                </div>
                <ul>
                    <li><Link id="link-words" to="/home">Overview</Link></li>
                    <li><Link id="link-words" to="/transactions">Transactions</Link></li>
                    <li><Link id="link-words" to="/settings">Settings</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header