interface IFilterProductsRequestDTO {
	pageSize: number;
	page: number;
	currentPage: number;
	category: string;
	categories?: string[];
	color?: string[];
	price?: number;
	name?: string;
}

export type { IFilterProductsRequestDTO };
