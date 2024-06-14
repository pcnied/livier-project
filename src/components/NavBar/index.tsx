import { Instagram, Menu as MenuIcon, WhatsApp } from '@mui/icons-material';
import {
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Link,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import logoLivier from '../../../public/assets/logo-livier.png';
import CategoryDrawer from '../CategoryDrawer';

interface NavBarProps {
	positionAppBar:
		| 'fixed'
		| 'absolute'
		| 'relative'
		| 'static'
		| 'sticky'
		| undefined;
}

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Cases Livier', path: '/cases' },
	{ name: 'Contrate a Livier', path: '/hire' },
	{ name: 'Sobre Nós', path: '/about-us' },
];

const NavBar: React.FC<NavBarProps> = ({ positionAppBar }) => {
	const [anchorCategoryDrawer, setAnchorCategoryDrawer] = useState({
		left: false,
	});

	const handleCategoryDrawerOpen = () => {
		setAnchorCategoryDrawer({ left: true });
	};

	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position={positionAppBar}
					sx={{ bgcolor: '#e7f5ff', boxShadow: 'none' }}
				>
					<Toolbar sx={{ padding: '3px 15px' }}>
						<IconButton
							size="large"
							edge="start"
							color="primary"
							aria-label="open drawer"
							sx={{ display: { md: 'none' } }}
							onClick={handleCategoryDrawerOpen}
						>
							<MenuIcon />
						</IconButton>

						<Link
							href={'/'}
							sx={{
								height: '120px',
								width: { xs: '100%', sm: 'auto' },
								display: { xs: 'flex', sm: 'auto' },
								justifyContent: 'center',
							}}
						>
							<Box
								component={'img'}
								src={logoLivier}
								sx={{ height: '100%' }}
							/>
						</Link>

						<Box
							sx={{
								marginX: '50px',
								display: { xs: 'none', md: 'flex' },
								height: '100%',
								alignItems: 'center',
							}}
							display={'flex'}
						>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.path}
									sx={{
										textDecoration: 'none',
										color: '#0f4577',
										marginLeft: '20px',
										transition: 'all 0.2s',
										colorScheme: '#dd0000d4',
										':hover': {
											color: '#3b3b3bd2',
										},
									}}
								>
									<Typography
										component={'h4'}
										variant="overline"
										fontSize={'16px'}
										noWrap
									>
										{link.name}
									</Typography>
								</Link>
							))}
						</Box>

						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton
								size="large"
								color="primary"
								onClick={() =>
									window.open(
										'https://wa.me/5583991429201',
										'_blank',
									)
								}
							>
								<WhatsApp />
							</IconButton>
							<IconButton
								size="large"
								color="primary"
								onClick={() =>
									window.open(
										'https://www.instagram.com/liviermkt/',
										'_blank',
									)
								}
							>
								<Instagram />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
			<CategoryDrawer
				anchorCategoryDrawer={anchorCategoryDrawer}
				setAnchorCategoryDrawer={setAnchorCategoryDrawer}
			/>
		</React.Fragment>
	);
};

export default NavBar;
