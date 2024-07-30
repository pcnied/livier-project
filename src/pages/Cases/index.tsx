import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import basico from '../../../public/assets/basico.png';
import casesBanner from '../../../public/assets/cases-banner.jpg';
import oMeuDeus from '../../../public/assets/omeudeus.png';
import petCoast from '../../../public/assets/petcoast.png';
import socialOne from '../../../public/assets/socialone.jpeg';
import socialThree from '../../../public/assets/socialthree.jpeg';
import socialTwo from '../../../public/assets/socialtwo.jpeg';
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';

const CasesPage = () => {
	document.title = 'Cases | Livier';
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const itemsEcom = [
		{ imageUrl: oMeuDeus, caption: 'www.omeudeus.com.br' },
		{ imageUrl: petCoast, caption: 'www.petcoast.com.br' },
		{ imageUrl: basico, caption: 'www.basico.com' },
	];

	const itemsSocialMedia = [
		{
			imageUrl: socialOne,
			width: '30%',
			height: '50%',
		},
		{ imageUrl: socialTwo, width: '30%', height: '50%' },
		{ imageUrl: socialThree, width: '30%', height: '50%' },
	];

	return (
		<Container>
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${casesBanner})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: isSmallScreen ? '400px' : '500px',
						width: '100%',
						boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
						position: 'relative',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Georgia',
							textAlign: 'center',
							position: 'absolute',
							fontSize: isSmallScreen ? '16px' : '28px',
							textTransform: 'uppercase',
							bottom: '8px',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#eeeeee',
							fontWeight: '500',
							fontStyle: 'normal',
							textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
							lineHeight: 2.0,
							width: 'calc(100% - 32px)',
							zIndex: 10,
						}}
					>
						Alguns de nossos principais Projetos
					</Typography>
				</Box>
			</Box>
			<Box marginTop={2}>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontSize: {
								xs: '18px',
								sm: '24px',
								md: '30px',
							},
						}}
						variant="overline"
					>
						Web Design (E-commerces)
					</Typography>
				</Grid>
			</Box>
			<Carousel items={itemsEcom} />
			<Box marginTop={2}>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography
						sx={{
							fontSize: {
								xs: '18px',
								sm: '24px',
								md: '30px',
							},
						}}
						variant="overline"
					>
						Social Media
					</Typography>
				</Grid>
			</Box>
			<Carousel items={itemsSocialMedia} />
		</Container>
	);
};

export default CasesPage;
