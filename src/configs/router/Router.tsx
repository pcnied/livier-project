import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import routerConfig from './routerConfig';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<ReactRoutes>
				{Object.values(routerConfig).map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.element}
					/>
				))}
			</ReactRoutes>
		</BrowserRouter>
	);
};

export default Routes;
