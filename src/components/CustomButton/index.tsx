import { Button, styled } from '@mui/material';

interface CustomButtonProps {
	name: string;
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

const CustomButton: React.FC<CustomButtonProps> = ({ name }) => {
	const handleClick = () => {
		window.open('https://wa.me/5531984360621', '_blank');
	};

	return <StyledButton onClick={handleClick}>{name}</StyledButton>;
};

export default CustomButton;
