import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import livierBanner from '../../../public/assets/livierBanner.jpg';
import CardCategories from '../../components/CardCategories';
import CardProduct from '../../components/CardProduct';
import Footer from '../../components/Footer';
import Infos from '../../components/Infos';
import InfoSM from '../../components/InfosSM';
import NavBar from '../../components/NavBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	findAllProducts,
	getAllProducts,
} from '../../store/modules/products/productsSlice';

const Home = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.title = 'Home | Livier';
		dispatch(
			findAllProducts({
				pageSize: 24,
				page: 1,
				currentPage: 1,
				category: 'BEST_SELLERS',
			}),
		);
	}, []);

	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Box sx={{ width: '100%' }}>
				<Box
					component="img"
					src={livierBanner}
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
					Transformando ideias em realidades digitais com design
					profissional e inovação contínua
				</Typography>
			</Box>
			<Box marginTop={2}>
				<Grid item xs={12} style={{ textAlign: 'center' }}>
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
				<Box padding={2}>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<Typography
							fontSize="32px"
							variant="overline"
							fontWeight={500}
							color={'black'}
						>
							Design Profissional
						</Typography>
					</Grid>
					<Infos />
				</Box>
				<Divider sx={{ width: '80%' }}></Divider>
				<Box padding={2}>
					<Grid item xs={12} style={{ textAlign: 'center' }}>
						<Typography
							fontSize="32px"
							variant="overline"
							fontWeight={500}
							color={'black'}
						>
							Social Media
						</Typography>
					</Grid>
					<InfoSM />
				</Box>
				<Divider sx={{ width: '80%' }}></Divider>
				<Grid item xs={10} padding={2}>
					<Typography
						variant="overline"
						fontSize={'30px'}
						textAlign={'start'}
					>
						Também podemos te ajudar com
					</Typography>
					<CardCategories />
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
