import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import bannerAboutUs from '../../../public/assets/banners/about-us-banner.jpg';
import luiza from '../../../public/assets/banners/luiza.jpeg';
import pedro from '../../../public/assets/banners/pedro.jpeg';
import AboutSection from '../../components/AboutSection';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const AboutUs = () => {
	document.title = 'Sobre Nós | Livier';

	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${bannerAboutUs})`,
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
			<Box marginTop={2}>
				<Grid item xs={12} padding={2} style={{ textAlign: 'center' }}>
					<Typography
						fontSize="24px"
						variant="overline"
						fontWeight={300}
						color={'black'}
					>
						NÓS SOMOS
					</Typography>
				</Grid>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				sx={{
					width: '100%',
					maxWidth: { xs: '100%', sm: '600px', md: '800px' },
					margin: 'auto',
				}}
			>
				<Grid item xs={12} paddingX={2}>
					<Typography
						textAlign="center"
						sx={{
							fontSize: { xs: '14px', sm: '16px', md: '24px' },
						}}
					>
						Uma agência inovadora e focada em resultados, com uma
						equipe de especialistas apaixonados por tecnologia. Ter
						uma empresa exige trabalho e esforço enormes. Por isso
						sabemos o quanto é importante que sejamos profissionais
						comprometidos com qualidade, prazos e acima de tudo com
						resultados. Integramos serviços dentro do marketing,
						focando unicamente em tornar o trabalho do CEO
						automatizado. Impulsionamos a sua empresa e maximizamos
						sua presença digital!
					</Typography>
				</Grid>
			</Box>
			<Box marginTop={2}>
				<Grid item xs={12} padding={2} style={{ textAlign: 'center' }}>
					<Typography
						fontSize="24px"
						variant="overline"
						fontWeight={300}
						color={'black'}
					>
						Quem criou a Livier?
					</Typography>
				</Grid>
			</Box>
			<Grid mb={4}>
				<AboutSection title={'Pedro Sodré'} imageUrl={pedro} />
				<AboutSection title={'Luiza Leblanc'} imageUrl={luiza} />
			</Grid>

			<Footer />
		</React.Fragment>
	);
};

export default AboutUs;
