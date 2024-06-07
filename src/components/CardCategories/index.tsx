import { Box, Grid, Typography, Grow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import calendarioIcon from '../../../public/assets/calendario.png';
import consultorIcon from '../../../public/assets/consultor.png';
import imagemPreta from '../../../public/assets/imagemPreta.jpg';
import perfilIcon from '../../../public/assets/perfil.png';
import wwwIcon from '../../../public/assets/www.png';

const cardData = [
	{
		title: 'Análise de Perfil',
		href: '/c/canivetes',
		src: imagemPreta,
		iconSrc: perfilIcon,
	},
	{
		title: 'Calendário de Conteúdo',
		href: '/c/bones',
		src: imagemPreta,
		iconSrc: calendarioIcon,
	},
	{
		title: 'Consultoria',
		href: '/c/chaveiros',
		src: imagemPreta,
		iconSrc: consultorIcon,
	},
	{
		title: 'Site Institucional',
		href: '/c/chaveiros',
		src: imagemPreta,
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

			// Verifica se ainda não ocorreu o efeito e se o scroll está ocorrendo para baixo
			if (!isEffectOccurred && scrollDown) {
				setIsVisible(true);
				setIsEffectOccurred(true); // Define que o efeito ocorreu
			}

			// Atualiza a posição anterior de rolagem
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
				justifyContent={'center'} // Centraliza os itens no contêiner
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
						}} // Adiciona padding para espaçamento entre itens
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
									width: '100%', // Garante que o Box ocupe toda a largura disponível do Grid item
									maxWidth: '300px', // Define uma largura máxima para manter os cards alinhados
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
