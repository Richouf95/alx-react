import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import favicon from './favicon.ico'; // Chemin correct si favicon est dans src/
import Notification from './Notifications'

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;

document.head.appendChild(link);


const notification = ReactDOM.createRoot(document.getElementById('root-notifications'));

const root = ReactDOM.createRoot(document.getElementById('root'));

notification.render(<React.StrictMode>
  <Notification />
</React.StrictMode>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
