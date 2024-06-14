import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from '../../pages/AboutUs';
import Cases from '../../pages/Cases';
import PricingPlans from '../../pages/Hire';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import PrivacyPolicy from '../../pages/PrivacyPolicy';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/hire" element={<PricingPlans />} />
				<Route path="/cases" element={<Cases />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
