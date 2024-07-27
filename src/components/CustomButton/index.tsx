import React from 'react';
import { Button, styled } from '@mui/material';

interface CustomButtonProps {
	name: string;
	onClick?: () => void; // Adiciona a prop onClick
}

const StyledButton = styled(Button)(({ theme }) => ({
	position: 'relative',
	display: 'inline-block',
	textAlign: 'center',
	fontSize: '16px',
	letterSpacing: '1px',
	textDecoration: 'none',
	color: '#0f4577',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	transition: 'ease-in 0.5s',
	border: '1px solid #0f4577',
	boxShadow: 'inset 0 0 0 0 #0f4577',
	borderRadius: '4px',
	'&:hover': {
		color: 'white',
		boxShadow: 'inset 0 -100px 0 0 #0f4577',
	},
	'&:active': {
		transform: 'scale(0.9)',
	},
}));

const CustomButton: React.FC<CustomButtonProps> = ({ name, onClick }) => {
	return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default CustomButton;
