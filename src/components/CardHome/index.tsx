import { Container } from '@mui/material';
import React from 'react';

import InfoCard from '../InfoCard';

interface CardHomeProps {
	title: string;
	description: string;
	imageUrl: string;
}

const CardHome: React.FC<CardHomeProps> = ({
	title,
	description,
	imageUrl,
}) => {
	return (
		<Container>
			<InfoCard
				imageUrl={imageUrl}
				title={title}
				description={description}
			/>
		</Container>
	);
};

export default CardHome;
