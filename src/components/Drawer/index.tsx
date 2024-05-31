import { CloseOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';

import { useAppSelector } from '../../store/hooks';
import { getAllcarts } from '../../store/modules/carts/cartsSlice';
import CardProductDrawerCart from '../CardProductDrawerCart';

type AnchorCart = {
	right: boolean;
};

interface DrawerCartProps {
	anchorCart: AnchorCart;
	setAnchorCart: React.Dispatch<
		React.SetStateAction<{
			right: boolean;
		}>
	>;
	authToken: string | undefined;
}

const DrawerCart: React.FC<DrawerCartProps> = ({
	anchorCart,
	setAnchorCart,
	authToken,
}) => {
	const carts = useAppSelector(getAllcarts);

	return (
		<div>
			<React.Fragment key={'right'}>
				<Drawer
					anchor={'right'}
					open={anchorCart['right']}
					sx={{
						minWidth: '364px',
					}}
				>
					<Grid
						container
						flexDirection={'column'}
						alignItems={'flex-end'}
						justifyContent={'flex-start'}
						padding={5}
						spacing={2}
					>
						<Grid item>
							<IconButton
								onClick={() => setAnchorCart({ right: false })}
							>
								<CloseOutlined />
							</IconButton>
						</Grid>
						<Grid
							item
							display={'flex'}
							justifyContent={'center'}
							sx={{ width: '100%' }}
						>
							<Typography
								variant={'h6'}
								component={'h3'}
								marginBottom={3}
							>
								Carrinho de compras
							</Typography>
						</Grid>

						{!authToken && (
							<Typography
								variant={'subtitle1'}
								component={'p'}
								margin={2}
							>
								Realize login para ter acesso ao carrinho!
							</Typography>
						)}

						{authToken && carts.length === 0 && (
							<Typography>
								Não há produtos no seu carrinho.
							</Typography>
						)}

						{authToken && (
							<>
								{carts.map((cart) => (
									<CardProductDrawerCart
										key={cart.id}
										product={cart.product}
										quantity={cart.quantity}
									/>
								))}
							</>
						)}
					</Grid>

					{authToken && carts.length > 0 && (
						<Button
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
						</Button>
					)}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default DrawerCart;
