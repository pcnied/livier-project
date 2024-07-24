import { Box, Typography } from '@mui/material';
import React from 'react';

interface ProductPriceProps {
	product: {
		priceData: {
			value: number;
			formattedValue: string;
		};
		discountData: {
			value: number;
		};
	};
	justifyCenter?: boolean;
	fontSize?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
	product,
	justifyCenter,
	fontSize,
}) => {
	const calculateOfferValueProduct = () => {
		const valueOffered =
			product.priceData.value - product.discountData.value;

		return valueOffered.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});
	};

	return (
		<Box
			display={'flex'}
			justifyContent={justifyCenter ? 'center' : 'start'}
			alignItems={'center'}
			gap={1}
		>
			<Typography
				fontSize={fontSize || '14px'}
				fontWeight={'500'}
				sx={{
					color: product.discountData.value ? '#ccc' : 'black',
					textDecoration: product.discountData.value
						? 'line-through'
						: '',
					fontWeight: product.discountData.value ? '400' : '500',
				}}
			>
				{product.priceData.formattedValue}
			</Typography>
			{product.discountData.value !== 0 && (
				<Typography
					fontSize={fontSize || '14px'}
					sx={{
						color: '#C63948',
						fontWeight: '500',
					}}
				>
					{calculateOfferValueProduct()}
				</Typography>
			)}
		</Box>
	);
};

export default ProductPrice;
