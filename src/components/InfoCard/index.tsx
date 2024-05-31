import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface InfoCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
	return (
		<Card
			sx={{
				margin: '10px',
				padding: '10px',
				transition: 'transform 0.3s, box-shadow 0.3s',
				'&:hover': {
					transform: 'scale(1.05)',
					boxShadow: 6,
				},
				bgcolor: '#001e32',
				height: '250px',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<CardContent>
				<Box sx={{ marginRight: '10px' }}>{icon}</Box>
				<Typography
					color={'white'}
					variant="overline"
					fontSize={'20px'}
					gutterBottom
				>
					{title}
				</Typography>
				<Typography color={'white'} fontSize={'18px'}>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default InfoCard;
