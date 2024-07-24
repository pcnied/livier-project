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
import React from 'react';

import contrateLivier from '../../../public/assets/hire-banner.jpg';
import CustomButton from '../CustomButton';

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
			<CustomButton name="Adiquirir" />
		</Card>
	);
};

const PricingPlans: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
							name="Atendimento ao cliente"
							description={[
								'Abordagens personalizadas conforme o seu negócio',
								'Resolução de problemas pré-venda, pós-venda de costumer success',
								'Solução de problemas voltada para o seu negócio',
								'Funcionamento 24hrs (caso seja automatizado)',
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
