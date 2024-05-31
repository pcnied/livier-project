/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { RootState } from '../..';
import { api } from '../../../configs/services/api';
import Cart, { CreateCart } from '../../../types/cart';
import { showNotification } from '../notifications/notificationsSlice';

const cartsAdapter = createEntityAdapter<Cart>({
	selectId: (state) => state.code,
});

export const getCarts = createAsyncThunk('carts/getCarts', async () => {
	try {
		const response = await api.get(`/cart`, {
			headers: {
				Authorization: Cookies.get('auth'),
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
});

export const createCart = createAsyncThunk(
	'carts/createCart',
	async (cart: CreateCart, { dispatch }) => {
		try {
			const response = await api.post(
				`/cart/create`,
				{
					productId: cart.productId,
					quantity: cart.quantity,
				},
				{
					headers: {
						Authorization: Cookies.get('auth'),
					},
				},
			);

			dispatch(
				showNotification({
					success: true,
					status: response.data.status,
				}),
			);

			return response.data;
		} catch (error: any) {
			dispatch(
				showNotification({
					success: false,
					status: error.response.data.error,
				}),
			);
			return error.response.data;
		}
	},
);

export const deleteCart = createAsyncThunk(
	'carts/deleteCart',
	async (productId: string, { dispatch }) => {
		try {
			const response = await api.delete(`/cart/delete/${productId}`, {
				headers: {
					Authorization: Cookies.get('auth'),
				},
			});

			dispatch(
				showNotification({
					success: true,
					status: response.data.status,
				}),
			);

			return response.data;
		} catch (error: any) {
			dispatch(
				showNotification({
					success: false,
					status: error.response.data.error,
				}),
			);
			return error.response.data;
		}
	},
);

export const updateCart = createAsyncThunk(
	'carts/updateCart',
	async (cartUpdate: CreateCart, { dispatch }) => {
		try {
			const response = await api.put(
				`/cart/update/${cartUpdate.productId}`,
				{
					quantity: cartUpdate.quantity,
				},
				{
					headers: {
						Authorization: Cookies.get('auth'),
					},
				},
			);

			dispatch(
				showNotification({
					success: true,
					status: response.data.status,
				}),
			);

			return response.data;
		} catch (error: any) {
			dispatch(
				showNotification({
					success: false,
					status: error.response.data.error,
				}),
			);
			return error.response.data;
		}
	},
);

const cartsSlice = createSlice({
	initialState: cartsAdapter.getInitialState({
		user: {
			email: '',
		},
		priceData: {
			formattedValue: '',
			value: 0,
		},
		discountData: {
			value: 0,
			percentual: 0,
		},
		length: 0,
		loading: false,
		status: '',
	}),
	name: 'carts',
	extraReducers: (builder) => {
		builder.addCase(createCart.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;

			if (action.payload.status.includes('Produto adicionado')) {
				cartsAdapter.addOne(state, action.payload.body);
			}

			if (action.payload.status.includes('Carrinho atualizado')) {
				cartsAdapter.updateOne(state, {
					id: action.payload.body.code,
					changes: {
						quantity: action.payload.body.quantity,
						totalPrice: action.payload.body.totalPrice,
					},
				});
			}
		});
		builder.addCase(createCart.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca de produtos no banco de dados';
		});
		builder.addCase(createCart.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});

		builder.addCase(getCarts.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;

			if (action.payload.success) {
				cartsAdapter.setAll(state, action.payload.body.cart);
				state.priceData = action.payload.body.priceData;
				state.length = action.payload.body.length;
			}
		});
		builder.addCase(getCarts.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca de produtos no banco de dados';
		});
		builder.addCase(getCarts.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});

		builder.addCase(deleteCart.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;
			cartsAdapter.removeOne(state, action.payload.id);
		});
		builder.addCase(deleteCart.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca de produtos no banco de dados';
		});
		builder.addCase(deleteCart.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});

		builder.addCase(updateCart.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;

			if (action.payload.status.includes('Carrinho atualizado')) {
				cartsAdapter.updateOne(state, {
					id: action.payload.body.cart.code,
					changes: {
						quantity: action.payload.body.cart.quantity,
						totalPrice: action.payload.body.cart.totalPrice,
					},
				});
			}

			if (action.payload.status.includes('Carrinho deletado')) {
				cartsAdapter.removeOne(state, action.payload.body.cart.id);
			}
		});

		builder.addCase(updateCart.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca de produtos no banco de dados';
		});
		builder.addCase(updateCart.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});
	},
	reducers: {},
});

export const { selectAll: getAllcarts } = cartsAdapter.getSelectors(
	(state: RootState) => state.carts,
);

export default cartsSlice.reducer;
