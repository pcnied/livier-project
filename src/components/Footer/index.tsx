import { WhatsApp, Mail } from '@mui/icons-material';
import { Box, Grid, Link as LinkMaterial, Typography } from '@mui/material';

import LogoLivier from '../../../public/assets/logo_livier_tech.png';

const linksContact = [
	{ title: '(31) 9.8436-0621', icon: <WhatsApp sx={{ mr: 1 }} /> },
	{ title: 'contato@liviermkt.com.br', icon: <Mail sx={{ mr: 1 }} /> },
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

const Footer = () => {
	return (
		<Box component={'footer'} sx={{ width: '100%', bgcolor: '#03141e' }}>
			<Grid
				container
				sx={{
					margin: '0',
					background: '#000',
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
						<img src={LogoLivier} height="150px" />
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'flex-start'}
							gap={1}
						>
							{linksContact.map((link) => (
								<Box
									key={link.title}
									display={'flex'}
									alignItems={'center'}
									sx={{ color: '#ffffff', fontSize: '14px' }}
								>
									{link.icon}
									<Typography>{link.title}</Typography>
								</Box>
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
										},
									}}
								>
									{link.title}
								</LinkMaterial>
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
					padding: '24px',
					backgroundColor: '#03141e',
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
