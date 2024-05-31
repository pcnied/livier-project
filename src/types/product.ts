
interface Product {
	code: string;
	name: string;
	priceData: {
		formattedValue: string;
		value: number;
	};
	discontData: {
		value: number;
		percentual: number;
		formattedValue: string;
	};
	categories: string[];
	color?: string;
	description: string;
	stock: {
		quantity: number;
		sellable: boolean;
		status: 'inStock' | 'outOfStock' | 'lowStock';
	};
	images: string[];
	primaryImage: {
		url: string;
	};
	tags: [
		{
			code: string;
			name: string;
		},
	];
}

export default Product;
