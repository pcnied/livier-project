import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<Box
			sx={{
				paddingBottom: 6,
				'& .slick-dots li button:before': {
					fontSize: '4px',
					color: '#000',
				},
				'& .slick-dots li.slick-active button:before': {
					color: '#000',
				},
			}}
		>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div key={index}>
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
									width: item.width || '50%', // Usa a largura fornecida ou 50% como padrão
									height: item.height || 'auto', // Usa a altura fornecida ou auto como padrão
									objectFit: 'cover', // Ajusta a imagem para cobrir totalmente a área definida
									borderRadius: '10px',
									boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
									transition: 'transform 0.3s ease-in-out',
									'@media (max-width: 600px)': {
										width: '90%', // Largura para dispositivos móveis
										height: 'auto', // Altura para dispositivos móveis
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
					</div>
				))}
			</Slider>
		</Box>
	);
};

export default Carousel;
