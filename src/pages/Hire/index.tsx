import {
	Card,
	CardContent,
	Typography,
	Grid,
	Box,
	Button,
} from '@mui/material';
import React from 'react';

import contrateLivier from '../../../public/assets/hire-banner.jpg';

interface PlanProps {
	name: string;
	description: string[];
	price: string;
}

const PlanCard: React.FC<PlanProps> = ({ name, description, price }) => {
	document.title = 'Contrate | Livier';
	return (
		<Card
			sx={{
				width: '380px',
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
					onClick={() =>
						window.open('https://wa.me/5583991429201', '_blank')
					}
				>
					Adquirir
				</Button>
			</Box>
		</Card>
	);
};

const PricingPlans: React.FC = () => {
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
						height: { xs: '250px', sm: '400px', md: '1000px' },
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				/>
				<Typography
					variant="overline"
					fontWeight={400}
					sx={{
						textAlign: 'center',
						position: 'absolute',
						fontSize: { xs: '12px', sm: '16px', md: '30px' },
						top: { xs: '30%', md: '50%' },
						left: { xs: '50%', md: '50%' },
						padding: '10px',
						color: '#e7f5ff',
						transform: 'translate(-50%, -50%)',
					}}
				>
					Confira os principais planos da Livier para você e sua
					empresa
				</Typography>
				<Box marginTop={2}>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<Typography
							fontSize="24px"
							variant="overline"
							fontWeight={300}
							color={'black'}
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
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Customize SM"
							description={[
								'Pacotes personalizados, elaborados conforme as necessidades específicas do cliente, bem como seus objetivos e estratégias no marketing',
								'Definir se inclui: design gráfico e vídeos',
							]}
							price="R$ --"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Branding e Identidade Visual"
							description={[
								'Criação da Logomarca',
								'Paleta de Cores',
								'Elementos da marca e submarca',
								'Direito a 5 alterações',
							]}
							price="R$ 700,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Atendimento Humano"
							description={[
								'HUMANO:',
								'Abordagens personalizadas conforme o seu negócio',
								'Resolução de problemas pré-venda, pós-venda de costumer success',
								'AUTOMATIZADO:',
								'Solução de problemas voltada para o seu negócio',
								'Funcionamento 24hrs',
							]}
							price="R$ 1.000,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Gestão de Tráfego"
							description={[
								'Criação de campanhas',
								'Gerenciamento de anúncios',
								'Relatórios semanais',
								'Ajustes de campanha',
								'Suporte',
							]}
							price="R$ 750,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Web Design"
							description={[
								'Landing Page',
								'Site Institucional',
								'Banco de Dados',
								'Preços variam de acordo com a quantidade de páginas solicitadas',
								'Suporte',
							]}
							price=" A partir de R$ 500,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Copywriting"
							description={[
								'Redação para sites e plataformas de qualquer estilo de comunicação',
								'Até 3 posts por semana',
								'Redação para Stories e Feed',
								'Roteirização para seus vídeos',
								'Redação para legendas',
								'Suporte',
							]}
							price="R$ 600,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Design"
							description={[
								'Artes para redes sociais ou outras plataformas',
								'Redação profissional',
								'Até 3 posts por semana',
								'Artes para Stories e Feed',
								'Artes avulsas (quantidade limitada)',
								'Suporte',
							]}
							price="R$ 600,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Digital Standard"
							description={[
								'Landing Page',
								'Standard SM',
								'Branding | Rebranding',
								'Planejamento de conteúdo estratégico',
								'Suporte',
							]}
							price="R$ 2.500,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Digital VIP"
							description={[
								'Site institucional (até 3 páginas)',
								'Premium SM',
								'Branding | Rebranding',
								'Automação para atendimento',
								'Planejamento de conteúdo estratégico',
								'Gestão de Tráfego',
							]}
							price="R$ 3.500,00"
						/>
					</Grid>
					<Grid item>
						<PlanCard
							name="Digital Livier"
							description={[
								'Site institucional (até 5 páginas)',
								'Premium SM',
								'Branding | Rebranding',
								'Atendimento Humano + Automação',
								'Gestão de Tráfego',
								'Suporte',
							]}
							price="R$ 5.500,00"
						/>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default PricingPlans;
