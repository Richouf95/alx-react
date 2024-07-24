import React from 'react'
import './Notifications.css'
import CloseIcon from "./close-icon.png"
import { getLatestNotification } from './utils'

function Notifications() {
    return (
        <div className='Notifications'>
            <button 
            aria-label="Close" 
            style={{ float: "right" }} 
            onClick={() => console.log("Close button has been clicked")}>
                <img src={CloseIcon} alt='close' style={{width: "10px", cursor: "pointer"}} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
            
        </div>
    )
}

export default Notifications