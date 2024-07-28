import React from 'react';
import { Card, CardContent, Typography, styled } from '@mui/material';

interface CardHomeProps {
	title: string;
	description: string;
	imageUrl: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
	width: '100%',
	maxWidth: 300,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	background: '#fff',
	border: '2px solid #ddd',
	borderRadius: 12,
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
	overflow: 'hidden',
	'&:hover': {
		transform: 'translateY(-5px)',
		boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
		border: '2px solid #000',
	},
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
	fontFamily: '"Poppins", sans-serif',
	fontSize: 18,
	fontWeight: 600,
	color: '#333',
	textTransform: 'uppercase',
	marginBottom: 8,
	position: 'relative',
	cursor: 'pointer',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 2,
		backgroundColor: '#000',
		transform: 'scaleX(0)', // Initially hidden
		transition: 'transform 0.3s',
	},
	'&:hover::after': {
		transform: 'scaleX(1)', // Fully visible on hover
	},
}));

const StyledContent = styled(Typography)(({ theme }) => ({
	fontFamily: '"Poppins", sans-serif',
	fontSize: 14,
	lineHeight: 1.6,
	color: '#666',
	marginBottom: 16,
}));

const CardHome: React.FC<CardHomeProps> = ({
	title,
	description,
	imageUrl,
}) => {
	return (
		<StyledCard>
			<img
				src={imageUrl}
				alt={title}
				style={{
					width: '100%',
					height: '200px',
					objectFit: 'cover',
					borderBottom: '2px solid #ddd',
				}}
			/>
			<CardContent>
				<StyledTitle variant="h6">{title}</StyledTitle>
				<StyledContent>{description}</StyledContent>
			</CardContent>
		</StyledCard>
	);
};

export default CardHome;
