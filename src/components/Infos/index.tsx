import React from 'react';
import InfoGrid from '../InfoGrid';
import {
	Star,
	Palette,
	ArtTrack,
	CheckCircle,
	ShoppingCart,
} from '@mui/icons-material';

const Infos: React.FC = () => {
	const infoItems = [
		{
			title: 'VISUAL PROFISSIONAL',
			description: 'Aplicações profissionais',
			icon: <Star sx={{ color: 'white' }} />,
		},
		{
			title: 'PADRONIZAÇÃO DO ESTILO',
			description: 'Paleta de cores e identidade da marca',
			icon: <Palette sx={{ color: 'white' }} />,
		},
		{
			title: 'ARTES AVULSAS',
			description: 'Quantidade personalizada',
			icon: <ArtTrack sx={{ color: 'white' }} />,
		},
		{
			title: 'CREDIBILIDADE',
			description: 'Para sua Marca',
			icon: <CheckCircle sx={{ color: 'white' }} />,
		},

		{
			title: 'AUTORIDADE E DESEJO DE COMPRA',
			description: 'Nos visitantes e usuários',
			icon: <ShoppingCart sx={{ color: 'white' }} />,
		},
	];

	return <InfoGrid items={infoItems} />;
};

export default Infos;
