import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Address from '../../pages/Address';
import CallCenter from '../../pages/CallCenter';
import Cart from '../../pages/Cart';
import Cases from '../../pages/Cases';
import Data from '../../pages/Data';
import PricingPlans from '../../pages/Hire';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import PaymentMethods from '../../pages/PaymentMethods';
import Products from '../../pages/Products';
import Profile from '../../pages/Profile';
import TermsOfUse from '../../pages/TermsOfUse';
import AboutUs from '../../pages/AboutUs';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/termsOfUse" element={<TermsOfUse />} />
				<Route path="/hire" element={<PricingPlans />} />
				<Route path="/callCenter" element={<CallCenter />} />
				<Route path="/cases" element={<Cases />} />
				<Route path="/paymentMethods" element={<PaymentMethods />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/c/:code" element={<Products />} />
				<Route path="/address" element={<Address />} />
				<Route path="/data" element={<Data />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
