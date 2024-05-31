import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardProduct from '../../components/CardProduct';
import FilterProducts from '../../components/FilterProducts';
import MyFooter from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	findAllProducts,
	getAllProducts,
} from '../../store/modules/products/productsSlice';
import { capitalize } from '../../utils/helpers/capitalize';

const Products: React.FC = () => {
	const products = useAppSelector(getAllProducts);
	const { count } = useAppSelector((state) => state.products);

	const { code } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (code) {
			document.title = `${capitalize(code)} | Experientes da Terra`;

			dispatch(
				findAllProducts({
					pageSize: 24,
					page: 1,
					currentPage: 1,
					category: code,
				}),
			);
		}
	}, []);

	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />

			<Grid
				container
				sx={{ padding: '20px' }}
				spacing={2}
				justifyContent="center"
			>
				<Grid item xs={12}>
					<Typography
						component={'h1'}
						variant="h5"
						fontWeight={'500'}
					>
						Novidades
					</Typography>
					<Typography
						component={'p'}
						color={'text.secondary'}
						variant="subtitle1"
						fontWeight={'500'}
					>
						Garanta seus produtos agora na melhor qualidade e preço!
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<Grid container justifyContent={'center'}>
						<Grid item xs={12} sm={12} md={2}>
							<FilterProducts />
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={10}
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Grid
								container
								sx={{
									padding: {
										xs: '20px 0',
										md: '0px 20px 20px 25px',
									},
								}}
								height={'100%'}
								spacing={1}
							>
								{/* {loading && <p>Carregando...</p>} */}
								{products.map((product) => (
									<Grid
										item
										key={product.code}
										xs={6}
										sm={4}
										md={3}
									>
										<CardProduct product={product} />
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<Typography variant={'subtitle1'} textAlign={'center'}>
						{count} produtos encontrados.
					</Typography>
				</Grid>
			</Grid>
			<MyFooter />
		</React.Fragment>
	);
};

export default Products;
