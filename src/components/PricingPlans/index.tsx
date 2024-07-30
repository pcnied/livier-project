import CheckIcon from '@mui/icons-material/Check';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Box,
	useMediaQuery,
	useTheme,
	Divider,
} from '@mui/material';
import React, { useState } from 'react';

import contrateLivier from '../../../public/assets/hire-banner.jpg';
import CustomButton from '../CustomButton';
import CartDrawer from '../DrawerCart';

interface PlanProps {
	id: number;
	name: string;
	description: string[];
	price: string;
	onAddToCart: (card: JSX.Element) => void;
}

const PlanCard: React.FC<PlanProps> = ({
	id,
	name,
	description,
	price,
	onAddToCart,
}) => {
	return (
		<Card
			sx={{
				width: '350px',
				height: '560px',
				margin: 'auto',
				marginBottom: '20px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				transition: 'transform 0.3s',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				'&:hover': {
					boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
					transform: 'scale(1.02)',
				},
			}}
		>
			<CardContent
				sx={{
					padding: '20px',
					backgroundColor: '#0f4577',
				}}
			>
				<Typography
					fontSize={'20px'}
					component="div"
					sx={{
						textAlign: 'center',
						color: '#ffffff',
					}}
				>
					{name}
				</Typography>
			</CardContent>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					flexGrow: 1,
					padding: '20px',
				}}
			>
				<Box sx={{ flexGrow: 1 }}>
					{description.map((item, index) => (
						<React.Fragment key={index}>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									marginY: '10px',
								}}
							>
								<CheckIcon
									sx={{
										color: '#000000',
										marginRight: '8px',
									}}
								/>
								<Typography fontSize={'12px'} color={'#000000'}>
									{item}
								</Typography>
							</Box>
							{index < description.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</Box>
				<Typography
					sx={{
						fontSize: '14px',
						mt: '2px',
					}}
				>
					A partir de:
				</Typography>
				<Typography
					variant="h6"
					color={'black'}
					sx={{
						marginBottom: '16px',
					}}
				>
					{price}
				</Typography>
			</CardContent>
			<CustomButton
				name="Adicionar ao Carrinho"
				onClick={() =>
					onAddToCart(
						<Card
							key={id}
							sx={{
								width: '100%',
								marginTop: '20px',
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							}}
						>
							<CardContent
								sx={{
									padding: '10px',
									backgroundColor: '#f5f5f5',
								}}
							>
								<Typography
									fontSize={'16px'}
									component="div"
									sx={{
										textAlign: 'center',
										color: '#333',
									}}
								>
									{name}
								</Typography>
							</CardContent>
							<CardContent
								sx={{
									display: 'flex',
									flexDirection: 'column',
									padding: '20px',
								}}
							>
								<Box sx={{ flexGrow: 1 }}>
									{description.map((item, index) => (
										<React.Fragment key={index}>
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center',
													marginY: '10px',
												}}
											>
												<CheckIcon
													sx={{
														color: '#000000',
														marginRight: '8px',
													}}
												/>
												<Typography
													fontSize={'12px'}
													color={'#000000'}
												>
													{item}
												</Typography>
											</Box>
											{index < description.length - 1 && (
												<Divider />
											)}
										</React.Fragment>
									))}
								</Box>
								<Typography
									sx={{
										fontSize: '14px',
										mt: '2px',
									}}
								>
									A partir de:
								</Typography>
								<Typography
									variant="h6"
									color={'black'}
									sx={{
										marginBottom: '16px',
									}}
								>
									{price}
								</Typography>
							</CardContent>
						</Card>,
					)
				}
			/>
		</Card>
	);
};

const PricingPlans: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const [anchorCart, setAnchorCart] = useState({ right: false });
	const [cartItems, setCartItems] = useState<JSX.Element[]>([]);

	const openCart = () => {
		setAnchorCart({ right: true });
	};

	const closeCart = () => {
		setAnchorCart({ right: false });
	};

	const handleAddToCart = (card: JSX.Element) => {
		setCartItems([...cartItems, card]);
		openCart();
	};

	React.useEffect(() => {
		document.title = 'Contrate | Livier';
	}, []);

	return (
		<React.Fragment>
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${contrateLivier})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: isSmallScreen ? '400px' : '500px',
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Georgia',
							textAlign: 'center',
							position: 'absolute',
							fontSize: isSmallScreen ? '16px' : '28px',
							textTransform: 'uppercase',
							bottom: '8px',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#eeeeee',
							fontWeight: '500',
							fontStyle: 'normal',
							textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
							lineHeight: 2.0,
							width: 'calc(100% - 32px)',
							zIndex: 10,
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
									sm: '24px',
									md: '30px',
								},
							}}
							variant="overline"
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
					{[
						{
							id: 1,
							name: 'Standard SM',
							description: [
								'Gerenciamento completo',
								'Criação de linha editorial',
								'Estratégia de conteúdo',
								'Criação de postagens 2x/semana (card único ou carrossel)',
								'Suporte',
								'2 reels/mês + Stories',
							],
							price: 'R$ 900,00',
						},
						{
							id: 2,
							name: 'Premium SM',
							description: [
								'Gerenciamento completo',
								'Criação de linha editorial',
								'Estratégia de conteúdo',
								'Análise de Métricas e Relatórios',
								'Criação de postagens 3x/semana (card único ou carrossel)',
								'Suporte',
								'5 reels/mês + Stories',
							],
							price: 'R$ 2.000,00',
						},
						{
							id: 3,
							name: 'Customize SM',
							description: [
								'Pacotes personalizados, elaborados conforme as necessidades específicas do cliente, bem como seus objetivos e estratégias no marketing',
								'Definir se inclui: design gráfico e vídeos',
							],
							price: 'R$ --',
						},
						{
							id: 4,
							name: 'Branding e Identidade Visual',
							description: [
								'Criação da Logomarca',
								'Paleta de Cores',
								'Elementos da marca e submarca',
								'Direito a 5 alterações',
							],
							price: 'R$ 700,00',
						},
						{
							id: 5,
							name: 'Atendimento ao cliente',
							description: [
								'Abordagens personalizadas conforme o seu negócio',
								'Resolução de problemas pré-venda, pós-venda de costumer success',
								'Solução de problemas voltada para o seu negócio',
								'Funcionamento 24hrs (caso seja automatizado)',
							],
							price: 'R$ 1.000,00',
						},
						{
							id: 6,
							name: 'Gestão de Tráfego',
							description: [
								'Criação de campanhas',
								'Gerenciamento de anúncios',
								'Relatórios semanais',
								'Ajustes de campanha',
								'Suporte',
							],
							price: 'R$ 750,00',
						},
						{
							id: 7,
							name: 'Web Design',
							description: [
								'Landing Page',
								'Site Institucional',
								'Banco de Dados',
								'Preços variam de acordo com a quantidade de páginas solicitadas',
								'Suporte',
							],
							price: 'A partir de R$ 500,00',
						},
						{
							id: 8,
							name: 'Copywriting',
							description: [
								'Redação para sites e plataformas de qualquer estilo de comunicação',
								'Até 3 posts por semana',
								'Redação para Stories e Feed',
								'Roteirização para seus vídeos',
								'Redação para legendas',
							],
							price: 'R$ 1.000,00',
						},
					].map((plan) => (
						<Grid item key={plan.id}>
							<PlanCard
								id={plan.id}
								name={plan.name}
								description={plan.description}
								price={plan.price}
								onAddToCart={handleAddToCart}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
			<CartDrawer
				open={anchorCart.right}
				onClose={closeCart}
				items={cartItems}
			/>
		</React.Fragment>
	);
};

export default PricingPlans;
