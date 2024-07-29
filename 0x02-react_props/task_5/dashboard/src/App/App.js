import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notification from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList"


function App() {

	let t = false;

	console.log(t)
	const hehe = () => {
		console.log(t =!t);
	}


	return (
		<React.Fragment>
			<div className='menuItem'>
				<p style={{ cursor: 'pointer', position: "fixed", right: "20px", zIndex:"10" }} onClick={() => t = !t}>Your notifications</p>
			</div>
			<Notification displayDrawer={t} />
			<div className='App'>
				<Header />
				<div className='App-body'>
					<Login />
					<CourseList />
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;