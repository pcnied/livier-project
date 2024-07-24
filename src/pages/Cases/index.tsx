import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import basico from '../../../public/assets/basico.png';
import casesBanner from '../../../public/assets/cases-banner.jpg';
import oMeuDeus from '../../../public/assets/omeudeus.png';
import petCoast from '../../../public/assets/petcoast.png';
import socialOne from '../../../public/assets/socialone.jpeg';
import socialThree from '../../../public/assets/socialthree.jpeg';
import socialTwo from '../../../public/assets/socialtwo.jpeg';
import Container from '../../components/Container';
import ImagesCases from '../../components/ImagesCases';
import Presentation from '../../components/Presentation';

const CasesPage = () => {
	document.title = 'Cases | Livier';
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
								sm: '20px',
								md: '24px',
							},
						}}
						variant="overline"
						fontWeight={300}
					>
						Web Design (E-commerces)
					</Typography>
				</Grid>
			</Box>
			<Grid>
				<Presentation
					imageUrl={oMeuDeus}
					title="ÓMeuDeus"
					siteUrl="www.omeudeus.com.br"
				/>
				<Presentation
					imageUrl={petCoast}
					title="PetCoast"
					siteUrl="www.petcoast.com.br"
				/>
				<Presentation
					imageUrl={basico}
					title="Básico.com"
					siteUrl="www.basico.com"
				/>
				<Box display={'flex'} justifyContent={'center'}>
					<Typography
						variant="overline"
						fontSize="30px"
						textAlign={'center'}
						fontWeight={400}
					>
						Social Media
					</Typography>
				</Box>

				<ImagesCases images={[socialOne, socialTwo, socialThree]} />
			</Grid>
		</Container>
	);
};

export default CasesPage;
