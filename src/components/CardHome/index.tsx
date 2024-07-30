import { Card, CardContent, Typography, styled } from '@mui/material';
import React from 'react';

interface CardHomeProps {
	title: string;
	description: string;
	imageUrl: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
	width: '100%',
	maxWidth: 320,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	background: '#fff',
	border: '2px solid #ddd',
	borderRadius: 12,
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
	transition:
		'transform 0.3s, box-shadow 0.3s, border 0.3s, box-shadow 0.3s, filter 0.3s',
	overflow: 'hidden',
	'&:hover': {
		transform: 'translateY(-10px)',
		boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
		border: '2px solid #000',
	},
}));

const StyledImage = styled('img')({
	width: '100%',
	height: 200,
	objectFit: 'cover',
	borderBottom: '2px solid #ddd',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
	fontFamily: '"Poppins", sans-serif',
	fontSize: 18,
	fontWeight: 600,
	color: '#333',
	textTransform: 'uppercase',
	marginBottom: 8,
	position: 'relative',
	cursor: 'pointer',
	padding: '16px',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 2,
		backgroundColor: '#000',
		transform: 'scaleX(0)',
		transition: 'transform 0.3s',
	},
	'&:hover::after': {
		transform: 'scaleX(1)',
	},
}));

const StyledContent = styled(Typography)(({ theme }) => ({
	fontFamily: '"Poppins", sans-serif',
	fontSize: 14,
	lineHeight: 1.6,
	color: '#666',
	marginBottom: 16,
	padding: '0 16px 16px',
}));

const CardHome: React.FC<CardHomeProps> = ({
	title,
	description,
	imageUrl,
}) => {
	return (
		<StyledCard>
			<StyledImage src={imageUrl} alt={title} />
			<CardContent>
				<StyledTitle variant="h6">{title}</StyledTitle>
				<StyledContent>{description}</StyledContent>
			</CardContent>
		</StyledCard>
	);
};

export default CardHome;
