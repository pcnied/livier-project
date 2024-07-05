import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import bannerAboutUs from '../../../public/assets/about-us-banner.jpg';
import luiza from '../../../public/assets/luiza.jpeg';
import pedro from '../../../public/assets/pedro.jpeg';
import AboutSection from '../../components/AboutSection';
import Container from '../../components/Container';

const AboutUsPage = () => {
	document.title = 'Sobre Nós | Livier';
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
			<Box marginTop={2}>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontSize: {
								xs: '18px',
								sm: '20px',
								md: '24px',
							},
						}}
						variant="overline"
						fontWeight={300}
					>
						Nós Somos
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
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontSize: {
								xs: '18px',
								sm: '20px',
								md: '24px',
							},
						}}
						variant="overline"
						fontWeight={300}
					>
						Quem criou a Livier?
					</Typography>
				</Grid>
			</Box>
			<Grid mb={4}>
				<AboutSection title={'Pedro Sodré'} imageUrl={pedro} />
				<AboutSection title={'Luiza Leblanc'} imageUrl={luiza} />
			</Grid>
		</Container>
	);
};

export default AboutUsPage;
