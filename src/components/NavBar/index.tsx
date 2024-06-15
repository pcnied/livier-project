import { Instagram, Menu as MenuIcon, WhatsApp } from '@mui/icons-material';
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
	{ name: 'Home', link: '/' },
	{ name: 'Cases Livier', link: '/cases' },
	{ name: 'Contrate a Livier', link: '/hire' },
	{ name: 'Sobre Nós', link: '/about-us' },
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

						<Link to={'/'} style={{ textDecoration: 'none' }}>
							<Box
								component={'img'}
								src={logoLivier}
								sx={{
									height: '120px',
									width: 'auto',
									display: 'flex',
									justifyContent: 'center',
								}}
							/>
						</Link>

						<Box
							sx={{
								marginX: '50px',
								display: { xs: 'none', md: 'flex' },
								height: '100%',
								alignItems: 'center',
							}}
						>
							{navLinks.map((link) => (
								<Box
									key={link.name}
									sx={{
										marginLeft: '20px',
										transition: 'all 0.2s',
										'&:hover': { color: '#3b3b3bd2' },
									}}
								>
									<Link
										to={link.link}
										style={{
											textDecoration: 'none',
											color: '#0f4577',
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
								</Box>
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
