import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface InfoCardProps {
	title: string;
	description: string;
	imageUrl: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
	title,
	description,
	imageUrl,
}) => {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Card
				sx={{
					padding: '10px',
					transition: 'transform 0.3s, box-shadow 0.3s',
					'&:hover': {
						transform: 'scale(1.05)',
						boxShadow: 6,
					},
					bgcolor: '#0f4577',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<CardContent>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<img
							src={imageUrl}
							style={{ width: '100px', height: '100px' }}
						/>
					</Box>
				</CardContent>
			</Card>
			<Typography
				color={'black'}
				variant="overline"
				fontSize={'20px'}
				gutterBottom
				align="center"
			>
				{title}
			</Typography>
			<Typography color={'black'} fontSize={'18px'} align="center">
				{description}
			</Typography>
		</Box>
	);
};

export default InfoCard;
