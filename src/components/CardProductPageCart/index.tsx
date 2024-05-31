import {
	DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { deleteCart, updateCart } from '../../store/modules/carts/cartsSlice';
import Product from '../../types/product';

interface CardProductProps {
	product: Product;
	quantity: number;
	totalPrice: number;
}

const CardProductPageCart: React.FC<CardProductProps> = ({
	product,
	quantity,
	totalPrice,
}) => {
	const [quantityCart, setQuantityCart] = useState(quantity);

	const dispatch = useAppDispatch();

	const handleDeleteCart = () => {
		dispatch(deleteCart(product.code));
	};

	const handleUpdateDivCart = () => {
		dispatch(
			updateCart({
				productId: product.code,
				quantity: quantityCart - 1,
			}),
		);
	};

	const handleSumUpdateCart = () => {
		dispatch(
			updateCart({
				productId: product.code,
				quantity: quantityCart + 1,
			}),
		);
	};

	useEffect(() => {
		setQuantityCart(quantity);
	}, [quantity]);

	return (
		<Card
			sx={{
				display: 'flex',
				borderRadius: '8px',
				marginBottom: '16px',
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 10px;',
				position: 'relative',
			}}
		>
			<CardMedia
				sx={{ height: '250px', width: { xs: '30%', md: '50%' } }}
				image={product.images[0]}
				title={product.name}
			/>

			<CardContent sx={{ width: '70%' }}>
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
				<Typography variant="subtitle2" color="primary">
					Quantidade:
					<IconButton
						sx={{
							color: '#000',
							display:
								quantityCart === 0 ? 'none' : 'inline-flex',
						}}
						onClick={() => handleUpdateDivCart()}
					>
						<KeyboardArrowLeft />
					</IconButton>
					<Typography
						sx={{
							color: '#757575',
							display: 'inline-flex',
							marginLeft: quantityCart === 0 ? '37px' : '0px',
						}}
					>
						{quantityCart}
					</Typography>
					<IconButton
						sx={{ color: '#000' }}
						onClick={() => {
							handleSumUpdateCart();
						}}
					>
						<KeyboardArrowRight />
					</IconButton>
				</Typography>

				<Box display={'flex'}>
					<Typography variant="subtitle2" color={'primary'}>
						Total:{' '}
						<span style={{ color: '#757575' }}>
							R${' '}
							{totalPrice.toFixed(2).toString().replace('.', ',')}{' '}
						</span>
					</Typography>
					<Typography variant="subtitle2" color="black">
						{' '}
					</Typography>
				</Box>
				<CardActions
					sx={{ position: 'absolute', right: '0px', bottom: '0px' }}
				>
					<IconButton
						sx={{ color: 'rgb(179, 11, 11)' }}
						onClick={handleDeleteCart}
					>
						<DeleteOutlineOutlinedIcon />
					</IconButton>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default CardProductPageCart;
