import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
import {
	Box,
	Grid,
	IconButton,
	Link as LinkMaterial,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MyFooter = () => {
	return (
		<Grid
			container
			sx={{ margin: '0', background: 'black' }}
			padding={5}
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
						variant="h6"
						color={'white'}
						textAlign={'initial'}
					>
						SOBRE NÓS
					</Typography>
					<Box
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
					>
						<Link
							to={'/termsOfUse'}
							style={{
								textDecoration: 'none',
								color: 'white',
								fontSize: '16px',
							}}
						>
							Termos de Uso
						</Link>
						<Link
							to={'/privacyPolicy'}
							style={{
								textDecoration: 'none',
								color: 'white',
								fontSize: '16px',
							}}
						>
							Política de Privacidade
						</Link>
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
						variant="h6"
						color={'white'}
						textAlign={'initial'}
					>
						AJUDA E SUPORTE
					</Typography>
					<Box
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
					>
						<Link
							to={'/callCenter'}
							style={{
								textDecoration: 'none',
								color: 'white',
								fontSize: '16px',
							}}
						>
							Central de Atendimento
						</Link>
						{/* <Link
							to={'/deliveryMethods'}
							style={{
								textDecoration: 'none',
								color: 'white',
								fontSize: '16px',
							}}
						>
							Formas de Entrega
						</Link> */}
						<Link
							to={'/paymentMethods'}
							style={{
								textDecoration: 'none',
								color: 'white',
								fontSize: '16px',
							}}
						>
							Formas de Pagamento
						</Link>
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
						variant="h6"
						color={'white'}
						textAlign={'initial'}
					>
						REDES SOCIAIS
					</Typography>
					<Box
						display={'flex'}
						flexDirection={'row'}
						justifyContent={'center'}
					>
						<IconButton size="large" color="secondary">
							<WhatsApp />
						</IconButton>
						<IconButton size="large" color="warning">
							<Instagram />
						</IconButton>
						<IconButton size="large" color="info">
							<LinkedIn />
						</IconButton>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default MyFooter;
