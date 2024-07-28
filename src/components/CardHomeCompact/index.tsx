import React from 'react';
import { Grid } from '@mui/material';
import serviceImage from '../../../public/assets/service.png';
import estrategyImage from '../../../public/assets/strategy.png';
import internetImage from '../../../public/assets/developer.png';
import socialImage from '../../../public/assets/social-media.png';
import ominiImage from '../../../public/assets/omnichannel.png';
import desingImage from '../../../public/assets/grapfic-designer.png';
import CardHome from '../CardHome';

const CardHomeCompact: React.FC = () => {
	return (
		<>
			<Grid container spacing={2} justifyContent="center" mb={2}>
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Desenvolvimento"
						description="Websites, Landing Pages, Aplicativos, Advertoriais"
						imageUrl={internetImage}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Design Gráfico"
						description="Identidade Visual, Layouts, Ilustrações, Materiais Publicitários"
						imageUrl={desingImage}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Redes Sociais"
						description="Produção de conteúdo, Monitoramento, Gerenciamento, Anúncios"
						imageUrl={socialImage}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Estratégia"
						description="Branding, Pesquisa de Mercado, Definição de Público-Alvo, Posicionamento"
						imageUrl={estrategyImage}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Omnichannel"
						description="Integração de Canais, Consistência de Marca, Experiência do Cliente, Estratégias de Comunicação"
						imageUrl={ominiImage}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CardHome
						title="Atendimento ao Cliente/Chatbot"
						description="Interface do Usuário, Fluxos de Conversação, Personalização, Experiência do Usuário"
						imageUrl={serviceImage}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default CardHomeCompact;
