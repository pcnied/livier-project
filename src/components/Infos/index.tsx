import React from 'react';

import InfoGrid from '../InfoGrid';

const Infos: React.FC = () => {
	const infoItems = [
		{
			title: 'Desenvolvimento',
			description: 'Websites, Landing Pages, Aplicativos, Advertoriais',
			imageUrl: '../../../public/assets/internet.png',
		},
		{
			title: 'Desing Gráfico',
			description:
				'Identidade Visual, Layouts, Ilustrações, Materiais Publicitários',
			imageUrl: '../../../public/assets/web-design.png',
		},
		{
			title: 'Redes Sociais',
			description:
				'Produção de conteúdo, Monitoramento, Gerenciamento, Anúncios',
			imageUrl: '../../../public/assets/midia-social.png',
		},
		{
			title: 'Estratégia',
			description:
				'Branding, Pesquisa de Mercado, Definição de Público-Alvo, Posicionamento',
			imageUrl: '../../../public/assets/estrategia.png',
		},

		{
			title: 'Ominichannel',
			description:
				'Integração de Canais, Consistência de Marca, Experiência do Cliente, Estratégias de Comunicação',
			imageUrl: '../../../public/assets/ominichannel.png',
		},
		{
			title: 'Atendimento ao Cliente/Chatbot',
			description:
				'Interface do Usuário, Fluxos de Conversação, Personalização, Experiência do Usuário',
			imageUrl: '../../../public/assets/bate-papo-online.png',
		},
	];

	return <InfoGrid items={infoItems} />;
};

export default Infos;
