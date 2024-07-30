import { Box, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CarouselItem {
	imageUrl: string;
	caption?: string;
	width?: string;
	height?: string;
}

interface CarouselProps {
	items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
	return (
		<Box
			sx={{
				paddingBottom: 4,
				position: 'relative',
				'& .swiper-pagination': {
					bottom: '2px', // Ajuste a posição vertical da paginação
				},
				'& .swiper-pagination-bullet': {
					backgroundColor: '#000',
					width: '4px', // Ajuste o tamanho do ponto
					height: '4px', // Ajuste o tamanho do ponto
				},
				'& .swiper-pagination-bullet-active': {
					backgroundColor: '#000',
				},
				'& .swiper-button-next, & .swiper-button-prev': {
					color: '#000',
				},
			}}
		>
			<Swiper
				modules={[Pagination, Navigation, Autoplay]}
				pagination={{ clickable: true }}
				autoplay={{ delay: 2000 }}
				loop
				spaceBetween={50}
				slidesPerView={1}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<Box
							sx={{
								padding: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Box
								component="img"
								src={item.imageUrl}
								alt={`Image ${index}`}
								sx={{
									width: item.width || '50%',
									height: item.height || 'auto',
									objectFit: 'cover',
									borderRadius: '10px',
									boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
									transition: 'transform 0.3s ease-in-out',
									'@media (max-width: 600px)': {
										width: '90%',
										height: 'auto',
									},
								}}
							/>
							<Typography
								sx={{
									marginTop: 2,
									fontSize: {
										xs: '16px',
										sm: '20px',
										md: '24px',
									},
								}}
								fontFamily={'Georgia'}
							>
								{item.caption}
							</Typography>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default Carousel;
