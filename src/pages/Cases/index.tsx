import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import basico from '../../../public/assets/banners/basico.png';
import casesBanner from '../../../public/assets/banners/cases-banner.jpg';
import oMeuDeus from '../../../public/assets/banners/omeudeus.png';
import petCoast from '../../../public/assets/banners/petcoast.png';
import socialOne from '../../../public/assets/banners/socialone.jpeg';
import socialThree from '../../../public/assets/banners/socialthree.jpeg';
import socialTwo from '../../../public/assets/banners/socialtwo.jpeg';
import Footer from '../../components/Footer';
import ImagesRow from '../../components/ImagesComp';
import NavBar from '../../components/NavBar';
import Presentation from '../../components/Presentation';

const Cases = () => {
	document.title = 'Cases | Livier';
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${casesBanner})`,
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
					Alguns de nossos principais Projetos
				</Typography>
			</Box>
			<Box display={'flex'} justifyContent={'center'}>
				<Typography
					variant="overline"
					fontSize="30px"
					textAlign={'center'}
					fontWeight={400}
				>
					Web Design (E-commerces)
				</Typography>
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

				<ImagesRow images={[socialOne, socialTwo, socialThree]} />
			</Grid>

			<Footer />
		</React.Fragment>
	);
};

export default Cases;
