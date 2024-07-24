import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import bannerAboutUs from '../../../public/assets/about-us-banner.jpg';
import luiza from '../../../public/assets/luiza.jpeg';
import pedro from '../../../public/assets/pedro.jpeg';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';

const AboutUsPage = () => {
	document.title = 'Sobre Nós | Livier';
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const items = [
		{ imageUrl: pedro, caption: 'Pedro Sodré' },
		{ imageUrl: luiza, caption: 'Luiza Leblanc' },
	];

	return (
		<Container>
			<Box sx={{ width: '100%', marginTop: 6 }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${bannerAboutUs})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: isSmallScreen ? '400px' : '700px',
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							textAlign: 'center',
							position: 'absolute',
							fontSize: isSmallScreen ? '20px' : '24px',
							textTransform: 'uppercase',
							bottom: '10px',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#eeeeee',
							fontWeight: '200',
							fontStyle: 'italic',
						}}
					>
						Saiba quem somos e qual nosso objetivo
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginTop: 2,
				}}
			>
				<Box width={isSmallScreen ? '100%' : '50%'} paddingX={4}>
					<Grid item xs={12} sx={{ textAlign: 'center' }}>
						<Typography
							sx={{
								fontSize: {
									xs: '20px',
									sm: '24px',
									md: '30px',
								},
							}}
							fontFamily={'Georgia'}
						>
							Nós Somos
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography
							textAlign="center"
							sx={{
								fontSize: {
									xs: '16px',
									sm: '18px',
									md: '20px',
								},
							}}
						>
							Uma agência inovadora e focada em resultados, com
							uma equipe de especialistas apaixonados por
							tecnologia. Ter uma empresa exige trabalho e esforço
							enormes. Por isso sabemos o quanto é importante que
							sejamos profissionais comprometidos com qualidade,
							prazos e acima de tudo com resultados. Integramos
							serviços dentro do marketing, focando unicamente em
							tornar o trabalho do CEO automatizado. Impulsionamos
							a sua empresa e maximizamos sua presença digital!
						</Typography>
					</Grid>
				</Box>
				<Box width={isSmallScreen ? '100%' : '50%'} paddingX={2}>
					<Grid
						item
						xs={12}
						sx={{ textAlign: 'center', marginTop: 2 }}
					>
						<Typography
							sx={{
								fontSize: {
									xs: '20px',
									sm: '24px',
									md: '30px',
								},
							}}
							fontFamily={'Georgia'}
						>
							Quem criou a Livier?
						</Typography>
					</Grid>
					<Carousel items={items} />
				</Box>
			</Box>
			<Box marginTop={2}></Box>
		</Container>
	);
};

export default AboutUsPage;
