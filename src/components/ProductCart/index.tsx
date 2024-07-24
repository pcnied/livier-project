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
import ProductPrice from '../../components/ProductPrice';

interface ProductCartProps {
	cart: {
		id: number;
		product: {
			name: string;
			primaryImage: {
				url: string;
			};
			stock: {
				quantity: number;
			};
			price: number;
			priceData: {
				value: number;
				formattedValue: string;
			};
			discountData: {
				value: number;
			};
		};
		quantity: number;
	};
	onDelete: (id: number) => void;
	onUpdate: (id: number, quantity: number) => void;
}

const ProductCart: React.FC<ProductCartProps> = ({
	cart,
	onDelete,
	onUpdate,
}) => {
	const [quantity, setQuantity] = useState(cart.quantity);

	const handleDeleteCart = () => {
		onDelete(cart.id);
	};

	const handleDecreaseCartUpdate = () => {
		const newQuantity = quantity - 1;
		setQuantity(newQuantity);
		onUpdate(cart.id, newQuantity);
	};

	const handleIncreaseCartUpdate = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		onUpdate(cart.id, newQuantity);
	};

	useEffect(() => {
		setQuantity(cart.quantity);
	}, [cart]);

	return (
		<Card
			sx={{
				borderRadius: '8px',
				width: 300,
				marginBottom: '16px',
				boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 5px;',
			}}
		>
			<CardActions sx={{ position: 'absolute' }}>
				<IconButton
					sx={{ ':hover': { backgroundColor: 'transparent' } }}
					onClick={handleDeleteCart}
				>
					<DeleteOutlineOutlinedIcon sx={{ fontSize: '18px' }} />
				</IconButton>
			</CardActions>
			<CardMedia
				component={'img'}
				sx={{
					height: '310px',
					width: '100%',
					backgroundSize: 'contain',
				}}
				image={cart.product.primaryImage.url}
				title={cart.product.name}
				alt={cart.product.name}
			/>

			<CardContent>
				<Typography
					variant="body2"
					component="p"
					noWrap
					textOverflow={'ellipsis'}
					sx={{
						fontSize: { xs: '12px', sm: '14px' },
					}}
				>
					{cart.product.name}
				</Typography>
				<ProductPrice product={cart.product} />
				<Typography
					sx={{ fontSize: { xs: '12px', sm: '14px' }, mt: 1 }}
				>
					Quantidade:
					<IconButton
						sx={{
							':hover': { backgroundColor: 'transparent' },
							color: '#000',
							display: quantity === 1 ? 'none' : 'inline-flex',
						}}
						onClick={handleDecreaseCartUpdate}
					>
						<KeyboardArrowLeft sx={{ fontSize: '18px' }} />
					</IconButton>
					<Typography
						variant="body2"
						component={'span'}
						sx={{
							fontSize: { xs: '12px', sm: '14px' },
							display: 'inline-flex',
							marginLeft: quantity === 1 ? '30px' : '0px',
							marginRight:
								quantity === cart.product.stock.quantity
									? '21px'
									: '0px',
						}}
					>
						{quantity}
					</Typography>
					<IconButton
						sx={{
							':hover': { backgroundColor: 'transparent' },
							color: '#000',
							display:
								quantity === cart.product.stock.quantity
									? 'none'
									: 'inline-flex',
						}}
						onClick={handleIncreaseCartUpdate}
					>
						<KeyboardArrowRight sx={{ fontSize: '18px' }} />
					</IconButton>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ProductCart;
