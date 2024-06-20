import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import NavBar from '../NavBar';

const MainLayout: React.FC = () => {
	return (
		<>
			<NavBar positionAppBar="fixed" />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
