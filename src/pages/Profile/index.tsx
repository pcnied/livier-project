import { Typography } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MyFooter from '../../components/Footer';
import NavBar from '../../components/NavBar';
import ProfileComponent from '../../components/ProfileComponent';

const links = [
	'Home',
	'Meus Endereços',
	'Dados e Preferência',
	'Meus Pedidos',
	'Lista de Desejos',
	'Sair',
];

const Profile = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (Cookies.get('auth') === undefined) {
			navigate('/login');
		}
	});

	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />
			<ProfileComponent>
				<Typography>MEUS PEDIDOS</Typography>
			</ProfileComponent>
			<MyFooter />
		</React.Fragment>
	);
};

export default Profile;
