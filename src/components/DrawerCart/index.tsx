import { CloseOutlined } from '@mui/icons-material';
import {
	Box,
	Grid,
	IconButton,
	Button as MUIButton,
	Typography,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCart from '../../components/ProductCart';

type AnchorCart = {
	right: boolean;
};

interface CartDrawerProps {
	anchorCart: AnchorCart;
	setAnchorCart: React.Dispatch<React.SetStateAction<AnchorCart>>;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
	anchorCart,
	setAnchorCart,
}) => {
	const [authentication, setAuthentication] = useState<string | undefined>(
		'',
	); // Simula autenticação
	const [carts, setCarts] = useState([
		// Produtos simulados no carrinho
		{
			id: 1,
			product: {
				name: 'Produto 1',
				primaryImage: { url: 'https://example.com/produto1.jpg' },
				stock: { quantity: 5 },
				price: 100,
				priceData: {
					value: 100,
					formattedValue: 'R$ 100,00',
				},
				discountData: {
					value: 10,
				},
			},
			quantity: 1,
		},
		{
			id: 2,
			product: {
				name: 'Produto 2',
				primaryImage: { url: 'https://example.com/produto2.jpg' },
				stock: { quantity: 3 },
				price: 200,
				priceData: {
					value: 200,
					formattedValue: 'R$ 200,00',
				},
				discountData: {
					value: 20,
				},
			},
			quantity: 2,
		},
	]);

	const navigate = useNavigate();

	const handleLoginClick = () => {
		setAuthentication('auth-token'); // Simula autenticação
	};

	const handleCloseCart = () => {
		setAnchorCart({ right: false });
	};

	const handleDeleteCart = (id: number) => {
		setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== id));
	};

	const handleUpdateCart = (id: number, quantity: number) => {
		setCarts((prevCarts) =>
			prevCarts.map((cart) =>
				cart.id === id ? { ...cart, quantity } : cart,
			),
		);
	};

	return (
		<div>
			<React.Fragment key={'right'}>
				<Drawer
					anchor={'right'}
					open={anchorCart.right}
					sx={{
						'.MuiDrawer-paperAnchorRight': {
							minWidth: '364px',
						},
					}}
				>
					<Grid
						container
						flexDirection={'column'}
						alignItems={'center'}
						justifyContent={'flex-start'}
						padding={2}
					>
						<Grid item>
							<IconButton
								onClick={handleCloseCart}
								sx={{
									':hover': {
										backgroundColor: 'transparent',
									},
								}}
							>
								<CloseOutlined />
							</IconButton>
						</Grid>
						<Grid
							item
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							sx={{ width: '100%' }}
							mb={2}
							mt={2}
						>
							<Typography
								fontSize={'16px'}
								component={'h3'}
								marginBottom={1}
							>
								Carrinho de compras
							</Typography>
							{authentication && carts.length > 0 && (
								<Typography fontSize={'14px'}>
									Você tem {carts.length}{' '}
									{carts.length === 1 ? 'item' : 'itens'} no
									carrinho.
								</Typography>
							)}
						</Grid>

						{!authentication && (
							<>
								<Typography fontSize={'14px'} margin={2}>
									Realize login para ter acesso ao carrinho!
								</Typography>
								<Box
									width={'100%'}
									px={2}
									display={'flex'}
									justifyContent={'center'}
								>
									<MUIButton
										variant="contained"
										sx={{
											px: 6,
										}}
										onClick={handleLoginClick}
									>
										Ir para o login
									</MUIButton>
								</Box>
							</>
						)}

						{authentication && carts.length === 0 && (
							<Box>
								<Typography variant={'subtitle1'}>
									Não há produtos no seu carrinho.
								</Typography>
							</Box>
						)}

						{authentication && (
							<>
								{carts.map((cart) => (
									<ProductCart
										key={cart.id}
										cart={cart}
										onDelete={handleDeleteCart}
										onUpdate={handleUpdateCart}
									/>
								))}
							</>
						)}
					</Grid>

					{authentication && carts.length > 0 && (
						<MUIButton
							fullWidth
							variant="contained"
							href="/cart"
							sx={{
								fontSize: '16px',
								borderRadius: '0px',
								padding: '20px 20px',
								position: 'sticky',
								width: '100%',
								bottom: 0,
								marginTop: 'auto',
								color: '#fff',
								bgcolor: '#067742',
								':hover': { bgcolor: '#068d4e' },
							}}
						>
							FINALIZAR COMPRA
						</MUIButton>
					)}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default CartDrawer;
