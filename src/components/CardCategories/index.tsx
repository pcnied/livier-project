import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

// import EdtCanivetes from '../../../public/assets/EdtCanivetes.jpg';
import { useNavigate } from 'react-router-dom';

import imagemPreta from '../../../public/assets/imagemPreta.jpg';
import { Business, Public, TrendingUp, Event } from '@mui/icons-material';

const cardData = [
	{
		title: 'Análise de Perfil',
		href: '/c/canivetes',
		src: imagemPreta,
		icon: <TrendingUp />,
	},
	{
		title: 'Calendário de Conteúdo',
		href: '/c/bones',
		src: imagemPreta,
		icon: <Event />,
	},
	{
		title: 'Consultoria',
		href: '/c/chaveiros',
		src: imagemPreta,
		icon: <Business />,
	},
	{
		title: 'Site Institucional',
		href: '/c/chaveiros',
		src: imagemPreta,
		icon: <Public />,
	},
];

const CardCategories = () => {
	const navigate = useNavigate();

	return (
		<React.Fragment>
			<Grid
				container
				sx={{ margin: '0' }}
				flexDirection={'row'}
				justifyContent={'space-around'}
				alignItems={'center'}
				paddingTop={1}
				paddingBottom={4}
			>
				{cardData.map((card) => (
					<Grid item key={card.href} xs={12} sm={3}>
						<Box
							onClick={() => {
								navigate(card.href);
							}}
							sx={{
								border: '1px solid #ccc',
								height: { xs: '200px', md: '300px' },
								filter: 'brightness(70%)',
								backgroundImage: `url(${card.src})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',

								backgroundPosition: 'center',
								transition: '0.5s',
								':hover': {
									cursor: 'pointer',
									filter: 'brightness(110%)',
								},
							}}
						>
							<Typography
								variant="h5"
								sx={{
									fontSize: '20px',
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									color: 'white',
								}}
							>
								<span style={{ marginRight: '8px' }}>
									{card.title}
								</span>
								{card.icon}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default CardCategories;
