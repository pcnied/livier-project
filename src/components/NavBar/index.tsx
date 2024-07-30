import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Toolbar,
	IconButton,
	useMediaQuery,
	styled,
	useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logoLivier from '../../../public/assets/logo_livier_tech.png';
import CategoryDrawer from '../CategoryDrawer';

interface NavBarProps {
	positionAppBar?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
}

interface StyledAppBarProps {
	scrolling: boolean;
}

const navLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'Cases Livier', link: '/cases' },
	{ name: 'Contrate a Livier', link: '/hire' },
	{ name: 'Sobre Nós', link: '/about-us' },
];

// Estilização da Navbar com styled do MUI
const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== 'scrolling',
})<StyledAppBarProps>(({ scrolling }) => ({
	transition: 'background-color 0.5s ease',
	backgroundColor: scrolling ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.25)',
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
	},
}));

const Logo = styled('img')({
	height: '100px',
	width: 'auto',
	display: 'flex',
	alignItems: 'center',
});

const NavLinks = styled('div')({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	marginLeft: '50px',
	gap: '50px',
});

const NavLink = styled(Link)({
	textDecoration: 'none',
	color: '#FFFFFF',
	fontSize: '1rem',
	fontWeight: 'bold',
	transition: 'color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease',
	borderBottom: '3px solid transparent',
	borderRadius: '3px',
	padding: '8px 16px',
	'&:hover': {
		color: '#0057F9',
		transform: 'scale(1.1)',
		borderBottom: '3px solid #0057F9',
	},
});

// Estilização da Toolbar
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	padding: '0 16px',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'row',
	},
}));

const NavBar: React.FC<NavBarProps> = ({ positionAppBar = 'fixed' }) => {
	const [scrolling, setScrolling] = useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleMenuOpen = () => {
		setDrawerOpen(true); // Abre o Drawer
	};

	const handleMenuClose = () => {
		setDrawerOpen(false); // Fecha o Drawer
	};

	return (
		<StyledAppBar position={positionAppBar} scrolling={scrolling}>
			<StyledToolbar>
				<Logo src={logoLivier} alt="Logo Livier" />
				{isMobile ? (
					<>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleMenuOpen}
						>
							<MenuIcon />
						</IconButton>
						<CategoryDrawer
							anchorCategoryDrawer={{ left: drawerOpen }}
							setAnchorCategoryDrawer={({ left }) => {
								setDrawerOpen(left);
							}}
						/>
					</>
				) : (
					<NavLinks>
						{navLinks.map((link) => (
							<NavLink to={link.link} key={link.name}>
								{link.name}
							</NavLink>
						))}
					</NavLinks>
				)}
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default NavBar;
