import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grow, Grid } from '@mui/material';

interface AboutSectionProps {
	title?: string;
	imageUrl: string;
	description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
	title = 'Sobre Nós',
	imageUrl,
	description,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current && !hasAnimated) {
				const top = ref.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				if (top < windowHeight * 0.8) {
					setIsVisible(true);
					setHasAnimated(true); // Marcar que a animação já ocorreu
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Para verificar a visibilidade inicialmente

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hasAnimated]);

	return (
		<Box padding="20px 20px">
			<Grow in={isVisible} timeout={1900}>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justifyContent="center"
					ref={ref}
					style={{
						transform: isVisible
							? 'translateX(0)'
							: 'translateX(-300px)',
						opacity: isVisible ? 1 : 0,
						transition: 'transform 1s ease, opacity 1s ease',
					}}
				>
					<Grid
						item
						xs={12}
						md={3}
						display="flex"
						justifyContent="center"
					>
						<Box
							width="300px"
							height="300px"
							overflow="hidden"
							display="flex"
							alignItems="center"
							justifyContent="center"
							borderRadius="10px"
							style={{
								transition: 'transform 0.5s ease',
							}}
							onMouseEnter={(e) =>
								(e.currentTarget.style.transform = 'scale(1.1)')
							}
							onMouseLeave={(e) =>
								(e.currentTarget.style.transform = 'scale(1.0)')
							}
						>
							<img
								src={imageUrl}
								alt="Sobre Nós"
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
							/>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={2}
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
					>
						<Typography variant="h4" gutterBottom>
							{title}
						</Typography>
						<Typography variant="body1">{description}</Typography>
					</Grid>
				</Grid>
			</Grow>
		</Box>
	);
};

export default AboutSection;
