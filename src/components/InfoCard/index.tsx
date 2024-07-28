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
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '10px',
				}}
			>
				<img src={imageUrl} style={{ width: '70px' }} />
			</Box>
			<Typography
				color={'black'}
				variant="overline"
				fontSize={'20px'}
				gutterBottom
				align="center"
				fontWeight={600}
				style={{ lineHeight: 1.2 }}
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
