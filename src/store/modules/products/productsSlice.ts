import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';

import { RootState } from '../..';
import { api } from '../../../configs/services/api';
import { IFilterProductsRequestDTO } from '../../../types/filters';
import Product from '../../../types/product';

const productsAdapter = createEntityAdapter<Product>({
	selectId: (state) => state.code,
});

export const findAllProducts = createAsyncThunk(
	'products/findAllProducts',
	async (filters: IFilterProductsRequestDTO) => {
		try {
			const response = await api.get(`/products`, {
				params: {
					...filters,
				},
			});
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	},
);

export const findProduct = createAsyncThunk(
	'products/findProduct',
	async (id: string) => {
		try {
			const response = await api.get(`/products/${id}`);
			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	},
);

const productsSlice = createSlice({
	initialState: productsAdapter.getInitialState({
		count: 0,
		loading: false,
		status: '',
	}),
	name: 'products',
	extraReducers: (builder) => {
		builder.addCase(findAllProducts.fulfilled, (state, action) => {
			(state.loading = false),
				(state.status = action.payload.status),
				productsAdapter.setAll(state, action.payload.body.products);
			state.count = action.payload.body.pagination.totalItems;
		});
		builder.addCase(findAllProducts.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca de produtos no banco de dados';
		});
		builder.addCase(findAllProducts.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});
	},
	reducers: {},
});

export const { selectAll: getAllProducts } = productsAdapter.getSelectors(
	(state: RootState) => state.products,
);

export default productsSlice.reducer;
