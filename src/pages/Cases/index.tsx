import { ExpandMore } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Presentation from '../../components/Presentation';
import oMeuDeus from '../../../public/assets/omeudeus.png';
import petCoast from '../../../public/assets/petcoast.png';
import basico from '../../../public/assets/basico.png';
import socialOne from '../../../public/assets/socialone.jpeg';
import socialTwo from '../../../public/assets/socialtwo.jpeg';
import socialThree from '../../../public/assets/socialthree.jpeg';
import bannerCases from '../../../public/assets/bannerCases.jpg';
import ImagesRow from '../../components/ImagesComp';

const Cases = () => {
	document.title = 'Cases | Livier';
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="div"
					sx={{
						backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${bannerCases})`,
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
				{/* <Grid sx={{display: 'flex', justifyContent: 'center', mb: 2}}>
			<Divider sx={{ width: '80%' }}></Divider>
			</Grid> */}

				<ImagesRow images={[socialOne, socialTwo, socialThree]} />
			</Grid>

			<Footer />
		</React.Fragment>
	);
};

export default Cases;