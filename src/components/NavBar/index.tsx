import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.css';

import logoLivier from '../../../public/assets/logo_livier_tech-removebg.png';

interface NavBarProps {
	positionAppBar?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
}

const navLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'Cases Livier', link: '/cases' },
	{ name: 'Contrate a Livier', link: '/hire' },
	{ name: 'Sobre Nós', link: '/about-us' },
];

const NavBar: React.FC<NavBarProps> = ({ positionAppBar = 'fixed' }) => {
	const [isNavBarAbsolute, setIsNavBarAbsolute] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsNavBarAbsolute(true);
			} else {
				setIsNavBarAbsolute(false);
			}
		};

		// Adiciona o listener do evento de scroll ao montar o componente
		window.addEventListener('scroll', handleScroll);

		// Remove o listener do evento de scroll ao desmontar o componente
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // A dependência vazia [] garante que o useEffect seja executado apenas uma vez

	return (
		<header
			className={`${Styles.header} ${
				isNavBarAbsolute ? Styles.absolute + ' active' : ''
			}`}
		>
			<img src={logoLivier} alt="Logo Livier" className={Styles.logo} />

			<div className={Styles.navLinks}>
				{navLinks.map((link) => (
					<Link
						to={link.link}
						key={link.name}
						className={Styles.link}
					>
						{link.name}
					</Link>
				))}
			</div>
		</header>
	);
};

export default NavBar;
