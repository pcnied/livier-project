import { Container, Grid } from '@mui/material';
import React from 'react';
import InfoCard from '../InfoCard';

interface InfoItem {
	title: string;
	description: string;
	icon: React.ReactNode;
}

interface InfoGridProps {
	items: InfoItem[];
}

const InfoGrid: React.FC<InfoGridProps> = ({ items }) => {
	return (
		<Container>
			<Grid container gap={2} justifyContent="center">
				{items.map((item, index) => (
					<Grid item xs={12} sm={6} md={5} key={index}>
						<InfoCard
							icon={item.icon}
							title={item.title}
							description={item.description}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default InfoGrid;
