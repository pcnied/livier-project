import React from 'react';
import InfoGrid from '../InfoGrid';
import {
	Edit,
	Assessment,
	Category,
	PostAdd,
	TrendingUp,
} from '@mui/icons-material';

const InfoSM: React.FC = () => {
	const infoItems = [
		{
			title: 'Criação de linha editorial',
			description:
				'Desenvolvimento de uma linha editorial consistente e alinhada com a marca',
			icon: <Edit sx={{ color: 'white' }} />,
		},
		{
			title: 'Elaboração de estratégia de conteúdo',
			description:
				'Planejamento estratégico para conteúdo direcionado e eficaz',
			icon: <Assessment sx={{ color: 'white' }} />,
		},
		{
			title: 'Estratégias personalizadas',
			description: 'Foco em Nicho e Algoritmos',
			icon: <Category sx={{ color: 'white' }} />,
		},
		{
			title: 'Criação de Conteúdo para Feed e Stories',
			description: 'Produção dinâmica para feeds e stories envolventes',
			icon: <PostAdd sx={{ color: 'white' }} />,
		},
		{
			title: 'Análise de Métricas e Ajustes',
			description: 'Refine sua estratégia com insights precisos',
			icon: <TrendingUp sx={{ color: 'white' }} />,
		},
	];

	return <InfoGrid items={infoItems} />;
};

export default InfoSM;
