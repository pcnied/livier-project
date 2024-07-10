import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import homeOne from '../../../public/assets/homepage-banner-one.jpg';
import homeThree from '../../../public/assets/homepage-banner-three.jpg';
import homeTwo from '../../../public/assets/homepage-banner-two.jpg';

interface Slide {
	image: string;
	text: string;
}

const CarouselHome: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const slides: Slide[] = [
		{
			image: homeOne,

			text: 'Nossa missão é impulsionar seus objetivos',
		},
		{
			image: homeTwo,
			text: 'Transformando sua presença online com marketing digital',
		},
		{
			image: homeThree,
			text: 'Buscando evolução contínua com tecnlogia',
		},
	];

	const renderSlides = () =>
		slides.map((slide, index) => (
			<SwiperSlide key={index}>
				<Box
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${slide.image})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: isSmallScreen ? '400px' : '700px',
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
						transition: 'opacity 1s ease-in-out',
						opacity: 0.9,
						'&:hover': {
							opacity: 1,
						},
					}}
				>
					<Typography
						variant="overline"
						fontWeight={400}
						sx={{
							textAlign: 'center',
							position: 'absolute',
							fontSize: isSmallScreen ? '16px' : '24px',
							textTransform: 'uppercase',
							bottom: '8px',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#eeeeee',
							fontWeight: '200',
							fontStyle: 'italic',
						}}
					>
						{slide.text}
					</Typography>
				</Box>
			</SwiperSlide>
		));

	return (
		<Box sx={{ width: '100%' }}>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				pagination={{ clickable: true }}
				navigation
				autoplay={{ delay: 3000 }}
				loop
				spaceBetween={50}
				slidesPerView={1}
			>
				{renderSlides()}
			</Swiper>
		</Box>
	);
};

export default CarouselHome;
