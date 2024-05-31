import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { createCart } from '../../store/modules/carts/cartsSlice';
import { showNotification } from '../../store/modules/notifications/notificationsSlice';
import Product from '../../types/product';
import { SnackBarComponent } from '../SnackBar';

interface CardProductProps {
	product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleCreateCart = () => {
		if (!Cookies.get('auth')) {
			dispatch(
				showNotification({
					success: false,
					status: 'Realize o login para adicionar ao carrinho',
				}),
			);

			return;
		}

		dispatch(createCart({ productId: product.code, quantity: 1 }));
	};

	return (
		<>
			{/* <Link href={`/p/${product.code}`}> */}
			<Card
				sx={{
					maxWidth: 345,
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
					borderRadius: '8px',
				}}
			>
				<CardMedia
					sx={{
						height: '250px',
						backgroundImage: `url(${product.primaryImage.url})`,
					}}
				/>
				<CardContent sx={{ padding: '5px 16px' }}>
					<Typography
						variant="subtitle1"
						component="div"
						noWrap
						textOverflow={'ellipsis'}
						sx={{ fontWeight: '500' }}
					>
						{product.name}
					</Typography>
					<Typography variant="subtitle2" color="black">
						{product.priceData.formattedValue}
					</Typography>
				</CardContent>
				<CardActions sx={{ padding: '0px' }}>
					<Grid container>
						<Grid item xs={12} marginTop={'10px'}>
							{' '}
							<Button
								size="small"
								variant="contained"
								fullWidth
								onClick={handleCreateCart}
								sx={{
									border: '0px',
									borderRadius: '0px',
									padding: '10px',
									color: '#0a0a0a',
									bgcolor: '#ffffff',
									':hover': {
										color: '#fff',
										bgcolor: '#000000',
									},
								}}
							>
								Adicionar ao Carrinho
							</Button>
						</Grid>
						<Grid item xs={12}>
							{' '}
							<Button
								size="small"
								variant="contained"
								fullWidth
								onClick={() => {
									handleCreateCart();
									navigate('/cart');
								}}
								sx={{
									borderRadius: '0px',
									padding: '10px',
									color: '#fff',
									bgcolor: '#067742',
									':hover': { bgcolor: '#068d4e' },
								}}
							>
								Comprar
							</Button>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
			{/* </Link> */}
			<SnackBarComponent />
		</>
	);
};

export default CardProduct;
