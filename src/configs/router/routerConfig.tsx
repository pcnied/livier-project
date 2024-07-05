import AboutUsPage from '../../pages/AboutUs';
import CasesPage from '../../pages/Cases';
import HirePage from '../../pages/Hire';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import PrivacyPolicyPage from '../../pages/PrivacyPolicy';

const routerConfig = {
	login: {
		path: '/login',
		element: <LoginPage />,
	},
	home: {
		path: '/',
		element: <HomePage />,
	},
	hire: {
		path: '/hire',
		element: <HirePage />,
	},
	cases: {
		path: '/cases',
		element: <CasesPage />,
	},
	aboutUs: {
		path: '/about-us',
		element: <AboutUsPage />,
	},
	privacyPolicy: {
		path: '/privacy-policy',
		element: <PrivacyPolicyPage />,
	},
};

export default routerConfig;
