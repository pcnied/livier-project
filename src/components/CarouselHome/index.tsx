import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import homeThree from '../../../public/assets/development.mp4';
import homeOne from '../../../public/assets/goals.mp4';
import homeTwo from '../../../public/assets/marketing.mp4';

interface Slide {
	video: string;
	text: string;
}

const CarouselHome: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const slides: Slide[] = [
		{
			video: homeOne,

			text: 'Nossa missão é impulsionar seus objetivos',
		},
		{
			video: homeTwo,
			text: 'Transformando sua presença online com marketing digital',
		},
		{
			video: homeThree,
			text: 'Buscando evolução contínua com tecnologia',
		},
	];

	const renderSlides = () =>
		slides.map((slide, index) => (
			<SwiperSlide key={index}>
				<video
					width="100%"
					autoPlay
					loop
					muted
					playsInline
					style={{
						objectFit: 'cover',
						height: isSmallScreen ? '400px' : '500px',
					}}
				>
					<source src={slide.video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<Typography
					variant="overline"
					fontWeight={400}
					sx={{
						fontFamily: 'Georgia',
						textAlign: 'center',
						position: 'absolute',
						fontSize: isSmallScreen ? '16px' : '28px',
						textTransform: 'uppercase',
						bottom: '8px',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						color: '#eeeeee',
						fontWeight: '500',
						fontStyle: 'normal',
						textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
						lineHeight: 2.0,
						width: 'calc(100% - 32px)',
						zIndex: 10,
					}}
				>
					{slide.text}
				</Typography>
			</SwiperSlide>
		));

	return (
		<Box sx={{ width: '100%' }}>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				pagination={{ clickable: true }}
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
