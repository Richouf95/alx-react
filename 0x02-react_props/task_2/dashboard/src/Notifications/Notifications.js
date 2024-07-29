import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

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
				<NotificationItem data-testid="child" type="default" value="New course available" />
				<NotificationItem type="urgent" value="New resume available" />
				<NotificationItem type="urgent" html={getLatestNotification} />
			</ul>
		</div>
	);
};

export default Notifications;