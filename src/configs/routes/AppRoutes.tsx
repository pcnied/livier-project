import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../../components/LayoutRoutes/MainLayout';

// Usando lazy para carregamento preguiçoso das páginas
const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const PricingPlans = lazy(() => import('../../pages/Hire'));
const Cases = lazy(() => import('../../pages/Cases'));
const AboutUs = lazy(() => import('../../pages/AboutUs'));
const PrivacyPolicy = lazy(() => import('../../pages/PrivacyPolicy'));

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="hire" element={<PricingPlans />} />
						<Route path="cases" element={<Cases />} />
						<Route path="about-us" element={<AboutUs />} />
						<Route
							path="privacy-policy"
							element={<PrivacyPolicy />}
						/>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default AppRoutes;
