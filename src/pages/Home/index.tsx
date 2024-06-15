import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import livierBanner from '../../../public/assets/home-banner.jpg';
import CardCategories from '../../components/CardCategories';
import CardHomeCompact from '../../components/CardHomeCompact';

const Home = () => {
	document.title = 'Home | Livier';

	return (
		<React.Fragment>
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${livierBanner})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: { xs: '250px', sm: '400px', md: '1000px' },
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				/>
				<Typography
					variant="overline"
					fontWeight={400}
					sx={{
						textAlign: 'center',
						position: 'absolute',
						fontSize: { xs: '12px', sm: '16px', md: '30px' },
						top: { xs: '30%', md: '50%' },
						left: { xs: '50%', md: '50%' },
						padding: '10px',
						color: '#e7f5ff',
						transform: 'translate(-50%, -50%)',
					}}
				>
					Transformando ideias em realidades digitais com design
					profissional e inovação contínua
				</Typography>
			</Box>
			<Box marginTop={2}>
				<Grid item xs={12} padding={2} style={{ textAlign: 'center' }}>
					<Typography
						fontSize="24px"
						variant="overline"
						fontWeight={300}
						color={'black'}
					>
						Fornecemos os seguintes suportes para sua empresa
					</Typography>
				</Grid>
			</Box>

			<Grid container justifyContent="center">
				<Box padding={2} marginBottom={4}>
					<CardHomeCompact />
				</Box>
				<Divider
					sx={{
						width: '80%',
						borderBottomWidth: '1px',
					}}
				></Divider>

				<Grid item xs={10} padding={2} style={{ textAlign: 'center' }}>
					<Typography
						fontSize="24px"
						variant="overline"
						fontWeight={300}
						color={'black'}
					>
						Também podemos te ajudar com
					</Typography>
					<CardCategories />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
