import Product from './product';

interface Cart {
	code: string;
	discountData: {
		value: number;
		percentual: number;
	};
	product: Product;
	quantity: number;
	totalPrice: {
		formattedValue: string;
		value: number;
	};
}

export interface CreateCart {
	productId: string;
	quantity: number;
}

export default Cart;
