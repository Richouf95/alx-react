import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer = false }) => {
	return (
		<React.Fragment>
				<div className='Notifications'>
					<p>
						Here is the list of notifications
					</p>
					<button
						aria-label='Close'
						onClick={() => console.log('Close button has been clicked')}
						style={{zIndex:"10"}}
					>
						<img src={closeIcon} alt='Close' />
					</button>
					<ul>
						<NotificationItem data-testid="child" type="default" value="New course available" />
						<NotificationItem type="urgent" value="New resume available" />
						<NotificationItem type="urgent" html={getLatestNotification} />
					</ul>
				</div>
				
		</React.Fragment>
	);
};

export default Notifications;