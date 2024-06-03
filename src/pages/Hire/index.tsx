import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Box,
	Button,
} from '@mui/material';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import contrateLivier from '../../../public/assets/contrateLivier.jpg';

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
				height: '320px',
				margin: 'auto',
				marginBottom: '20px',
				backgroundColor: '#f5f5f5', // Alterado para uma cor mais clara
				borderRadius: '12px', // Adicionado para suavizar as bordas
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adicionado sombra
				transition: 'transform 0.3s',
				'&:hover': {
					transform: 'scale(1.05)',
				},
				position: 'relative',
			}}
		>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body1" color={'black'}>
					<strong>O que está incluso:</strong>
				</Typography>
				{description.map((item, index) => (
					<Typography fontSize={'14px'} color={'black'} key={index}>
						- {item}
					</Typography>
				))}
				<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Typography variant="h6" color={'black'}>
						Preço: {price}
					</Typography>
				</Box>
				<Box
					sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
				>
					<Button
						variant="contained"
						color="primary"
						style={{ backgroundColor: '#001e32' }}
					>
						Adquirir
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

const PricingPlans: React.FC = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="img"
					src={contrateLivier}
					sx={{
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: { xs: '200px', md: '500px' },
						width: '100%',
					}}
				/>
				<Typography
					variant="overline"
					fontWeight={500}
					sx={{
						position: 'absolute',
						fontSize: { xs: '14px', md: '28px', sm: '18px' },
						top: { xs: '25%', md: '40%' },
						left: { xs: '30%', md: '50%' },
						padding: '10px',
						color: 'white',
						transform: {
							xs: 'translate(-10%, -20%)',
							md: 'translate(-25%, -25%)',
						},
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						borderRadius: '8px',
					}}
				>
					Confira os principais planos da Livier para você e sua
					empresa
				</Typography>
			</Box>
			<Box marginTop={2}>
				<Grid item xs={12} style={{ textAlign: 'center' }}>
					<Typography
						fontSize="24px"
						variant="overline"
						fontWeight={300}
						color={'black'}
					>
						Planos acessíveis e que se encaixam perfeitamente no seu
						orçamento
					</Typography>
				</Grid>
			</Box>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				marginTop={2}
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
							'Abordagens personalizadas conforme o seu negócio',
							'Resolução de problemas pré-venda, pós-venda de costumer success',
							'Também existe de forma AUTOMATIZADA, sendo solução de problemas voltada para o seu negócio e com funcionamento 24h',
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
							'Ajustes de campanha Suporte',
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
							'Direito a 5 alterações',
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
							'Direito a 5 alterações',
							'Suporte',
						]}
						price="R$ 600,00"
					/>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};
export default PricingPlans;
