import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import aboutUs from '../../../public/assets/about-us.jpg';
import pedro from '../../../public/assets/pedro.jpeg';
import luiza from '../../../public/assets/luiza.jpeg';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import AboutSection from '../../AboutSection';

const AboutUs = () => {
	document.title = 'Sobre Nós | Livier';

	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${aboutUs})`,
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
					Saiba quem somos e qual nosso objetivo
				</Typography>
			</Box>
			<AboutSection
				title={'Pedro Sodré'}
				description="Descrição"
				imageUrl={pedro}
			/>
			<AboutSection
				title={'Luiza Leblanc'}
				description="Descrição"
				imageUrl={luiza}
			/>
			{/* <Box marginTop={2}>
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
			</Box> */}
			<Footer />
		</React.Fragment>
	);
};

export default AboutUs;
