import {
	Box,
	Divider,
	Grid,
	Link as LinkMaterial,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const linksContact = [
	{
		title: '(83) 8828-3128',
	},
	{
		title: 'contato@livier.com',
	},
];

const linksHelp = [
	{
		title: 'Sobre Nós',
		url: '/aboutUs',
	},
	{
		title: 'Contrate a Livier',
		url: '/hire',
	},
	{
		title: 'Formas de Pagamento',
		url: '/payment-methods',
	},
];

const linksSocialMedia = [
	{
		title: 'Instagram',
		url: 'https://www.instagram.com/',
		icon: <i className="fa fa-instagram" style={{ fontSize: '36px' }}></i>,
	},
	{
		title: 'Facebook',
		url: 'https://www.facebook.com/',
	},
	{
		title: 'Youtube',
		url: 'https://www.youtube.com/',
	},
	{
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/',
	},
];

const MyFooter = () => {
	return (
		<Box component={'footer'} sx={{ width: '100%', bgcolor: '#03141e' }}>
			<Grid
				container
				sx={{
					margin: '0',
					background: '#03141e',
					padding: '70px 30px',
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
						<Typography
							variant="overline"
							fontSize={'20px'}
							color={'white'}
							textAlign={'initial'}
						>
							Fale Conosco
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
						>
							DÚVIDAS FREQUENTES
						</Typography>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							gap={1}
						>
							{linksHelp.map((link) => (
								<Link
									key={link.title}
									to={link.url}
									style={{
										textDecoration: 'none',
										color: 'white',
										fontSize: '16px',
									}}
								>
									{link.title}
								</Link>
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
						{' '}
						<Typography
							variant="overline"
							fontSize={'20px'}
							color={'white'}
							textAlign={'initial'}
						>
							REDES SOCIAIS
						</Typography>
						<Box display="flex" flexDirection="column" gap={1}>
							{linksSocialMedia.map((link) => (
								<LinkMaterial
									key={link.title}
									href={link.url}
									target={'_blank'}
									sx={{
										textDecoration: 'none',
										color: 'white',
										fontSize: '16px',
									}}
								>
									{link.title}
								</LinkMaterial>
							))}
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Divider sx={{ bgcolor: '#ffffff' }} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '20px 0',
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

export default MyFooter;
