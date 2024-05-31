import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import medias from '../../configs/medias';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

interface ProfileComponentProps {
	children: React.ReactNode;
}

const links = [
	{
		title: 'Home',
		link: '/',
		icon: <HomeOutlinedIcon />,
	},
	{
		title: 'Meus Endereços',
		link: '/addresses',
		icon: <FmdGoodOutlinedIcon />,
	},
	{
		title: 'Dados e Preferência',
		link: '/profile',
		icon: <AccountCircleOutlinedIcon />,
	},
	{
		title: 'Meus Pedidos',
		link: '/orders',
		icon: <LocalShippingOutlinedIcon />,
	},
	{
		title: 'Lista de Desejos',
		link: '/wishlist',
		icon: <FavoriteBorderOutlinedIcon />,
	},
	{
		title: 'Sair',
		link: '/',
		icon: <ArrowOutwardOutlinedIcon />,
	},
];

const ProfileComponent: React.FC<ProfileComponentProps> = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (Cookies.get('auth') === undefined) {
			navigate('/login');
		}
	});

	return (
		<React.Fragment>
			<Grid
				container
				justifyContent={'center'}
				paddingTop={10}
				paddingBottom={2}
				spacing={2}
			>
				<Grid item xs={6} sm={2} height={'100vh'}>
					<Box
						sx={{
							width: '100%',
							borderRadius: '20px',
							border: '1px solid #ccc',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							padding: '10px',
							height: '70vh',
						}}
					>
						<Box
							component={'img'}
							src={medias.userProfile}
							sx={{
								width: '40%',
								zIndex: '1',
								borderRadius: '50%',
							}}
						/>
						<Grid
							container
							flexDirection={'column'}
							alignItems={'initial'}
							marginTop={'20px'}
							padding={2}
							spacing={1}
						>
							{links.map((item) => (
								<>
									<Grid
										key={item.title}
										item
										display={'flex'}
										alignItems={'flex-end'}
										spacing={1}
									>
										<Link
											href="/profile"
											sx={{
												textDecoration: 'none',
												color: 'black',
											}}
										>
											{' '}
											<Typography
												component={'h3'}
												fontSize={16}
												display={'flex'}
												alignItems={'center'}
												gap={1}
											>
												{item.icon} {item.title}
											</Typography>
										</Link>
									</Grid>
									<Grid
										item
										display={'flex'}
										justifyContent={'center'}
									>
										{' '}
										<Divider
											sx={{
												width: '100%',
												color: 'black',
											}}
										/>
									</Grid>
								</>
							))}
						</Grid>
					</Box>
				</Grid>
				<Grid item xs={12} sm={8}>
					<Box
						sx={{
							position: 'relative',
							width: '100%',
							height: '100%',
							borderRadius: '10px',
						}}
					>
						{children}
					</Box>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileComponent;
