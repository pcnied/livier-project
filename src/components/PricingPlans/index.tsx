import React, { useState } from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Box,
	Button,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import CartDrawer from '../../components/DrawerCart'; // Ajuste o caminho conforme necessário
import contrateLivier from '../../../public/assets/hire-banner.jpg';

interface PlanProps {
	name: string;
	description: string[];
	price: string;
	onButtonClick: () => void; // Adicionando a prop onButtonClick
}

const PlanCard: React.FC<PlanProps> = ({
	name,
	description,
	price,
	onButtonClick,
}) => {
	document.title = 'Contrate | Livier';
	return (
		<Card
			sx={{
				width: '330px',
				height: '380px',
				margin: 'auto',
				marginBottom: '20px',
				backgroundColor: '#e7f5ff',
				borderRadius: '12px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				transition: 'transform 0.3s',
				'&:hover': {
					transform: 'scale(1.05)',
				},
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body1" color={'#0f4577'}>
					<strong>O que está incluso:</strong>
				</Typography>
				{description.map((item, index) => (
					<Typography fontSize={'14px'} color={'#0f4577'} key={index}>
						- {item}
					</Typography>
				))}
			</CardContent>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
				}}
			>
				<Typography
					variant="h6"
					color={'black'}
					sx={{
						textAlign: 'right',
						marginRight: '16px',
						marginBottom: '8px',
					}}
				>
					Preço: {price}
				</Typography>
				<Button
					variant="contained"
					color="primary"
					sx={{
						backgroundColor: '#001e32',
						width: '100%',
						borderBottomLeftRadius: '12px',
						borderBottomRightRadius: '12px',
						'&:hover': {
							backgroundColor: '#0f4577',
						},
						padding: '12px',
						boxSizing: 'border-box',
					}}
					onClick={onButtonClick} // Usando a prop onButtonClick
				>
					Adquirir
				</Button>
			</Box>
		</Card>
	);
};

const PricingPlans: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [anchorCart, setAnchorCart] = useState({ right: false });

	const toggleCart = (open: boolean) => () => {
		setAnchorCart({ right: open });
	};

	return (
		<React.Fragment>
			<Box sx={{ width: '100%', marginTop: 6 }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${contrateLivier})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: isSmallScreen ? '400px' : '700px',
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							textAlign: 'center',
							position: 'absolute',
							fontSize: isSmallScreen ? '20px' : '24px',
							textTransform: 'uppercase',
							bottom: '10px',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#eeeeee',
							fontWeight: '200',
							fontStyle: 'italic',
						}}
					>
						Confira os principais planos da Livier para você e sua
						empresa
					</Typography>
				</Box>
				<Box marginTop={2}>
					<Grid item xs={12} sx={{ textAlign: 'center' }}>
						<Typography
							sx={{
								fontSize: {
									xs: '18px',
									sm: '20px',
									md: '24px',
								},
							}}
							variant="overline"
							fontWeight={300}
						>
							Planos acessíveis e que se encaixam perfeitamente no
							seu orçamento
						</Typography>
					</Grid>
				</Box>
				<Grid
					container
					spacing={2}
					justifyContent="center"
					marginTop={1}
					marginBottom={4}
				>
					<Grid item>
						<PlanCard
							name="Standard SM"
							description={[
								'Gerenciamento completo',
								'Criação de linha editorial',
								'Estratégia de conteúdo',
								'Criação de postagens 2x/semana (card único ou carrossel)',
								'Suporte',
								'2 reels/mês + Stories',
							]}
							price="R$ 900,00"
							onButtonClick={toggleCart(true)} // Passando a função para abrir o carrinho
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Premium SM"
							description={[
								'Gerenciamento completo',
								'Criação de linha editorial',
								'Estratégia de conteúdo',
								'Análise de Métricas e Relatórios',
								'Criação de postagens 3x/semana (card único ou carrossel)',
								'Suporte',
								'5 reels/mês + Stories',
							]}
							price="R$ 2.000,00"
							onButtonClick={toggleCart(true)} // Passando a função para abrir o carrinho
						/>
					</Grid>
					{/* Outros planos aqui */}
				</Grid>
			</Box>
			<CartDrawer anchorCart={anchorCart} setAnchorCart={setAnchorCart} />
		</React.Fragment>
	);
};

export default PricingPlans;
