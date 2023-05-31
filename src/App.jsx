import React, { createContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useLocation, useLoaderData } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import HeaderTitle from './components/HeaderTitle/HeaderTitle';
import LinePattern from './assets/images/line-pattern.png'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

export const JobsContext = createContext([]);

const App = () => {
	const location = useLocation();
	const jobsData = useLoaderData();
	
	return (
		<div>
			<header className='header'>
				<img draggable={false} className='pattern-1' src={LinePattern} alt="" />
				<Navbar />
				{
					location.pathname === '/' ? <Banner /> : <HeaderTitle />
				}
				<img draggable={false} className='pattern-2' src={LinePattern} alt="" />
			</header>
			<JobsContext.Provider value={jobsData}>
				<Outlet />
			</JobsContext.Provider>
			<Toaster />
		</div>
	);
};

export default App;