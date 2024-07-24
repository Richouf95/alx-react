import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
	return (
		<div className='Notifications'>
			<p>
				Here is the list of notifications
			</p>
			<button
				aria-label='Close'
				onClick={() => console.log('Close button has been clicked')}
			>
				<img src={closeIcon} alt='Close' />
			</button>
			<ul>
				<li data='default'>New course available</li>
				<li data='urgent'>New resume available</li>
				<li
					data='urgent'
					dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
				></li>
			</ul>
		</div>
	);
};

export default Notifications;