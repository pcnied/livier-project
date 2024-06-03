import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grow } from '@mui/material';

interface PresentationProps {
	title: string;
	siteUrl: string;
	imageUrl: string;
}

const Presentation: React.FC<PresentationProps> = ({
	title,
	imageUrl,
	siteUrl,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const top = ref.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				setIsVisible(top < windowHeight * 0.5);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Para verificar a visibilidade inicialmente

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<Grow in={isVisible} timeout={1600}>
				<Box ref={ref} textAlign="center">
					<Typography fontSize={'32px'} mb={1} mt={1} gutterBottom>
						{title}
					</Typography>
					<Typography fontSize={'20px'} mb={2}>{siteUrl}</Typography>
					<img
						src={imageUrl}
						alt="Presentation"
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</Box>
			</Grow>
		</div>
	);
};

export default Presentation;
