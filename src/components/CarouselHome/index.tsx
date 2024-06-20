import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import livierBanner from '../../../public/assets/home-banner.jpg';
import basico from '../../../public/assets/basico.png';
import livierBanner3 from '../../../public/assets/hire-banner.jpg';

interface Slide {
	image: string;
	text: string;
}

const CarouselHome: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const slides: Slide[] = [
		{
			image: livierBanner,
			text: 'Transformando ideias em realidades digitais com design profissional e inovação contínua',
		},
		{ image: basico, text: 'Outro texto de exemplo para o segundo slide' },
		{ image: livierBanner3, text: 'Mais um texto para o terceiro slide' },
	];

	const renderSlides = () =>
		slides.map((slide, index) => (
			<Box
				key={index}
				sx={{
					backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${slide.image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: isSmallScreen ? '400px' : '1000px',
					width: '100%',
					boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
					position: 'relative',
				}}
			>
				<Typography
					variant="overline"
					fontWeight={400}
					sx={{
						textAlign: 'center',
						position: 'absolute',
						fontSize: isSmallScreen ? '14px' : '30px',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						color: '#e7f5ff',
						padding: '10px',
					}}
				>
					{slide.text}
				</Typography>
			</Box>
		));

	return (
		<Carousel animation="slide" indicators autoPlay={true}>
			{renderSlides()}
		</Carousel>
	);
};

export default CarouselHome;
