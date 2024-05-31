import {
	DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
}

const CardProductDrawerCart: React.FC<CardProductProps> = ({
	product,
	quantity,
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
				borderRadius: '8px',
				maxWidth: 300,
				marginBottom: '16px',
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
			}}
		>
			<CardActions>
				<IconButton
					sx={{ color: 'rgba(241, 10, 10, 0.747)' }}
					onClick={handleDeleteCart}
				>
					<DeleteOutlineOutlinedIcon />
				</IconButton>
			</CardActions>
			<CardMedia
				sx={{ height: 140, width: 300 }}
				image={product.primaryImage.url}
				title={product.name}
			/>

			<CardContent>
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
				<Typography variant="subtitle2" color="text.secondary">
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
			</CardContent>
		</Card>
	);
};

export default CardProductDrawerCart;
