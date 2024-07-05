import React from 'react';

import Footer from '../../components/Footer';
import FormLogin from '../../components/FormLogin';
import NavBar from '../../components/NavBar';

const LoginPage = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />
			<FormLogin />
			<Footer />
		</React.Fragment>
	);
};

export default LoginPage;
