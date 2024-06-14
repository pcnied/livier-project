import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CallCenter from '../../pages/CallCenter';
import Cases from '../../pages/Cases';
import Data from '../../pages/Data';
import PricingPlans from '../../pages/Hire';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import TermsOfUse from '../../pages/TermsOfUse';
import AboutUs from '../../pages/AboutUs';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/termsOfUse" element={<TermsOfUse />} />
				<Route path="/hire" element={<PricingPlans />} />
				<Route path="/callCenter" element={<CallCenter />} />
				<Route path="/cases" element={<Cases />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/data" element={<Data />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
