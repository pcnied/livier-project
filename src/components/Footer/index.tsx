import { Box, Grid, Link as LinkMaterial, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import LogoPreview from '../../../public/assets/logo-teste.jpeg'

const linksContact = [
	{
		title: '(31) 9.8436-0621',
	},
	{
		title: 'contato@liviermkt.com.br',
	},
];

const linksHelp = [
	{
		title: 'Sobre Nós',
		url: '/about-us',
	},
	{
		title: 'Contrate a Livier',
		url: '/hire',
	},
	{
		title: 'Política de Privacidade',
		url: '/privacy-policy',
	},
];

const linksSocialMedia = [
	{
		title: '../../../public/assets/instagram.png',
		url: 'https://www.instagram.com/liviermkt'
	},
	{
		title: '../../../public/assets/facebook.png',
		url: 'https://www.facebook.com/profile.php?id=61554559621184',
	},
	{
		title: '../../../public/assets/tiktok.png',
		url: 'https://www.tiktok.com/@liviermkt',
	},
	{
		title: '../../../public/assets/linkedin.png',
		url: 'https://www.linkedin.com/in/livier-mkt-9b67452b9',
	},
];

const Footer = () => {
	return (
		<Box component={'footer'} sx={{ width: '100%', bgcolor: '#03141e' }}>
			<Grid
				container
				sx={{
					margin: '0',
					background: '#03141e',
					padding: '30px 15px',
				}}
				justifyContent={'center'}
				gap={2}
			>
				<Grid
					item
					xs={12}
					sm={3}
					display={'flex'}
					flexDirection={'column'}
					alignItems={{ xs: 'flex-start', sm: 'center' }}
				>
					<Box>
						<img src={LogoPreview} height="80"/>
						<Typography
							fontSize={'20'}
							color={'white'}
						>
							Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					display={'flex'}
					flexDirection={'column'}
					alignItems={{ xs: 'flex-start', sm: 'center' }}
				>
					<Box>
						<Typography
							variant="overline"
							fontSize={'20px'}
							color={'white'}
							textAlign={'initial'}
							fontWeight={'500'}
						>
							INSTITUCIONAL
						</Typography>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							gap={1}
						>
							{linksHelp.map((link) => (
								<LinkMaterial
									key={link.title}
									href={link.url}
									target={'_blank'}
									sx={{
										textDecoration: 'none',
										color: 'white',
										fontSize: '16px',
										transition: 'color 0.3s',
										'&:hover': {
											color: 'blue',
										}
									}}
								>
									{link.title}
								</LinkMaterial>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={3}
					display={'flex'}
					flexDirection={'column'}
					alignItems={{ xs: 'flex-start', sm: 'center' }}
				>
					<Box>
					<Typography
						variant="overline"
						fontSize={'20px'}
						color={'white'}
						textAlign={'initial'}
						fontWeight={'500'}
					>
						ATENDIMENTO
					</Typography>

						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							gap={1}
						>
							{linksContact.map((link) => (
								<Typography
									key={link.title}
									style={{
										textDecoration: 'none',
										color: 'white',
										fontSize: '16px',
									}}
								>
									{link.title}
								</Typography>
							))}
						</Box>
					</Box>
					
				</Grid>
			</Grid>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '15px',
					backgroundColor: '#1C282F'
				}}
			>
				<Typography
					sx={{
						fontSize: '14px',
						color: 'white',
					}}
				>
					© 2024 Livier. Todos os direitos reservados.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
