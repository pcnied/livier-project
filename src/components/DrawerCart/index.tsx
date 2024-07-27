import CloseIcon from '@mui/icons-material/Close';
import { Drawer, Box, IconButton, Typography, Divider } from '@mui/material';
import React from 'react';

interface CartDrawerProps {
	open: boolean;
	onClose: () => void;
	items: JSX.Element[];
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose, items }) => {
	return (
		<Drawer anchor="right" open={open} onClose={onClose}>
			<Box
				sx={{
					width: 350,
					padding: 3,
					position: 'relative',
				}}
			>
				<IconButton
					onClick={onClose}
					sx={{
						position: 'absolute',
						top: 4,
						right: 16,
					}}
				>
					<CloseIcon />
				</IconButton>
				<Typography
					mt={3}
					variant="h5"
					gutterBottom
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					Carrinho de Compras
				</Typography>
				{items.length === 0 ? (
					<Typography>O carrinho está vazio</Typography>
				) : (
					<Box>
						{items.map((item, index) => (
							<Box key={index}>
								{item}
								{index < items.length - 1}
							</Box>
						))}
					</Box>
				)}
			</Box>
		</Drawer>
	);
};

export default CartDrawer;
