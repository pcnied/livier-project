import { Grid } from '@mui/material';
import React from 'react';

import serviceImage from '../../../public/assets/bate-papo-online.png';
import estrategyImage from '../../../public/assets/estrategia.png';
import internetImage from '../../../public/assets/internet.png';
import socialImage from '../../../public/assets/midia-social.png';
import ominiImage from '../../../public/assets/ominichannel.png';
import desingImage from '../../../public/assets/web-design.png';
import CardHome from '../CardHome';

const CardHomeCompact: React.FC = () => {
	return (
		<div>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={5} width={'100%'}>
					<CardHome
						title="Desenvolvimento"
						description="Websites, Landing Pages, Aplicativos, Advertoriais"
						imageUrl={internetImage}
					/>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<CardHome
						title="Desing Gráfico"
						description="Identidade Visual, Layouts, Ilustrações, Materiais Publicitários"
						imageUrl={desingImage}
					/>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<CardHome
						title="Redes Sociais"
						description="Produção de conteúdo, Monitoramento, Gerenciamento, Anúncios"
						imageUrl={socialImage}
					/>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<CardHome
						title="Estratégia"
						description="Branding, Pesquisa de Mercado, Definição de Público-Alvo, Posicionamento"
						imageUrl={estrategyImage}
					/>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<CardHome
						title="Ominichannel"
						description="Integração de Canais, Consistência de Marca, Experiência do Cliente, Estratégias de Comunicação"
						imageUrl={ominiImage}
					/>
				</Grid>
				<Grid item xs={12} sm={5} md={5}>
					<CardHome
						title="Atendimento ao Cliente/Chatbot"
						description="Interface do Usuário, Fluxos de Conversação, Personalização, Experiência do Usuário"
						imageUrl={serviceImage}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default CardHomeCompact;
