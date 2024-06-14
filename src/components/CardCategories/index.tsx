import { Box, Grid, Typography, Grow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import calendarioIcon from '../../../public/assets/icons/calendario.png';
import consultorIcon from '../../../public/assets/icons/consultor.png';
import perfilIcon from '../../../public/assets/icons/perfil.png';
import wwwIcon from '../../../public/assets/icons/www.png';

const cardData = [
	{
		title: 'Análise de Perfil',
		href: '/hire',
		// src:
		iconSrc: perfilIcon,
	},
	{
		title: 'Calendário de Conteúdo',
		href: '/hire',
		// src:
		iconSrc: calendarioIcon,
	},
	{
		title: 'Consultoria',
		href: '/hire',
		// src:
		iconSrc: consultorIcon,
	},
	{
		title: 'Site Institucional',
		href: '/hire',
		// src:
		iconSrc: wwwIcon,
	},
];

const CardCategories = () => {
	const navigate = useNavigate();
	const [isVisible, setIsVisible] = useState(false);
	const [isEffectOccurred, setIsEffectOccurred] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const scrollDown =
				currentScrollPos > prevScrollPos && currentScrollPos > 1600;

			if (!isEffectOccurred && scrollDown) {
				setIsVisible(true);
				setIsEffectOccurred(true);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos, isEffectOccurred]);

	return (
		<React.Fragment>
			<Grid
				container
				sx={{ marginX: '0', padding: '16px' }}
				justifyContent={'center'}
				alignItems={'center'}
			>
				{cardData.map((card, index) => (
					<Grid
						item
						key={index}
						xs={12}
						sm={6}
						md={3}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							padding: '8px',
						}}
					>
						<Grow in={isVisible} timeout={2000}>
							<Box
								onClick={() => {
									navigate(card.href);
								}}
								sx={{
									borderRadius: '16px',
									overflow: 'hidden',
									height: { xs: '250px', md: '350px' },
									width: '100%',
									maxWidth: '300px',
									bgcolor: '#0f4577',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									position: 'relative',
									transition: 'transform 0.3s, filter 0.3s',
									':hover': {
										cursor: 'pointer',
										transform: 'scale(1.05)',
										filter: 'brightness(110%)',
									},
									boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										top: '0',
										left: '0',
										right: '0',
										bottom: '0',

										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										textAlign: 'center',
										flexDirection: 'column',
									}}
								>
									<img
										src={card.iconSrc}
										alt={card.title}
										style={{
											width: '50px',
											height: '50px',
											marginBottom: '8px',
										}}
									/>
									<Typography
										variant="h5"
										sx={{
											fontSize: '20px',
											color: 'white',
											padding: '0 16px',
										}}
									>
										{card.title}
									</Typography>
								</Box>
							</Box>
						</Grow>
					</Grid>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default CardCategories;
