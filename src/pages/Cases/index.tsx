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
					component="img"
					src={bannerCases}
					sx={{
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: { xs: '200px', md: '500px' },
						width: '100%',
					}}
				/>
				<Typography
					variant="overline"
					textAlign={'center'}
					fontWeight={500}
					sx={{
						position: 'absolute',
						fontSize: { xs: '14px', md: '28px', sm: '16px' },
						top: { xs: '25%', md: '40%' },
						left: { xs: '30%', md: '50%' },
						padding: '10px',
						color: 'white',
						transform: {
							xs: 'translate(-10%, -20%)',
							md: 'translate(-25%, -25%)',
						},
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						borderRadius: '8px',
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

			<Footer />
		</React.Fragment>
	);
};

export default Cases;
