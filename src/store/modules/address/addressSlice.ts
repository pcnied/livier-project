import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { RootState } from '../..';
import { api } from '../../../configs/services/api';
import Address, {
	ICreateAddressRequestDTO,
	IUpdateAddressRequestDTO,
} from '../../../types/address';
import { showNotification } from '../notifications/notificationsSlice';

const addressAdapter = createEntityAdapter<Address>({
	selectId: (state) => state.id,
});

export const getAddress = createAsyncThunk('address/getAddress', async () => {
	try {
		const response = await api.get(`/addresses`, {
			headers: {
				Authorization: Cookies.get('auth'),
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
});

export const createAddress = createAsyncThunk(
	'address/createAddress',
	async (createAddress: ICreateAddressRequestDTO, { dispatch }) => {
		try {
			const response = await api.post(
				'/addresses/create',
				{
					name: createAddress.name,
					street: createAddress.street,
					neighborhood: createAddress.neighborhood,
					number: createAddress.number,
					complement: createAddress.complement,
					city: createAddress.city,
					state: createAddress.state,
					zipCode: createAddress.zipCode.replace(/\D/g, ''),
					recipient: createAddress.recipient,
					recipientPhone: createAddress.recipientPhone,
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

export const deleteAddress = createAsyncThunk(
	'address/deleteAddress',
	async (addressId: string, { dispatch }) => {
		try {
			const response = await api.delete(
				`/addresses/delete/${addressId}`,
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

export const updateAddress = createAsyncThunk(
	'address/updateAddress',
	async (addressUpdate: IUpdateAddressRequestDTO, { dispatch }) => {
		try {
			const response = await api.put(
				`/addresses/update/${addressUpdate.id}`,
				{
					name: addressUpdate.name,
					street: addressUpdate.street,
					neighborhood: addressUpdate.neighborhood,
					number: addressUpdate.number,
					complement: addressUpdate.complement,
					city: addressUpdate.city,
					state: addressUpdate.state,
					zipCode: addressUpdate.zipCode,
					recipient: addressUpdate.recipient,
					recipientPhone: addressUpdate.recipientPhone,
					default: addressUpdate.default,
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

const addressSlice = createSlice({
	initialState: addressAdapter.getInitialState({
		length: 0,
		loading: false,
		status: '',
	}),
	name: 'address',
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAddress.fulfilled, (state, action) => {
			(state.loading = false), (state.status = action.payload.status);

			if (action.payload.success) {
				addressAdapter.setAll(state, action.payload.data.addresses);
			}
		});
		builder.addCase(getAddress.pending, (state) => {
			(state.loading = true),
				(state.status =
					'Aguarde enquanto encontramos seus endereços...');
		});
		builder.addCase(getAddress.rejected, (state) => {
			(state.loading = false),
				(state.status =
					'Houve um erro na requisição. Por favor, contate o suporte.');
		});

		builder.addCase(createAddress.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;

			if (action.payload.success) {
				addressAdapter.addOne(state, action.payload.data);
			}
		});
		builder.addCase(createAddress.pending, (state) => {
			(state.loading = true),
				(state.status = 'Aguarde enquanto criamos o endereço...');
		});
		builder.addCase(createAddress.rejected, (state) => {
			(state.loading = false),
				(state.status =
					'Houve um erro na requisição. Por favor, contate o suporte.');
		});

		builder.addCase(deleteAddress.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;
			addressAdapter.removeOne(state, action.payload.id);
		});
		builder.addCase(deleteAddress.pending, (state) => {
			state.loading = true;
			state.status =
				'Aguardando a busca do endereço no banco de dados...';
		});
		builder.addCase(deleteAddress.rejected, (state) => {
			state.loading = false;
			state.status =
				'Houve um erro na requisição. Por favor, contate o suporte.';
		});

		builder.addCase(updateAddress.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;

			if (action.payload.status.success) {
				addressAdapter.updateOne(state, {
					id: action.payload.body.id,
					changes: {
						name: action.payload.body.name,
						customer: action.payload.body.customer,
						street: action.payload.body.street,
						neighborhood: action.payload.body.neighborhood,
						number: action.payload.body.number,
						complement: action.payload.body.complement,
						city: action.payload.body.city,
						state: action.payload.body.state,
						zipCode: action.payload.body.zipCode,
						default: action.payload.body.default,
					},
				});
			}
		});

		builder.addCase(updateAddress.pending, (state) => {
			state.loading = true;
			state.status =
				'Aguardando a busca do endereço no banco de dados...';
		});
		builder.addCase(updateAddress.rejected, (state) => {
			state.loading = false;
			state.status =
				'Houve um erro na requisição. Por favor, contate o suporte.';
		});
	},
});

export const { selectAll: getAllAddress } = addressAdapter.getSelectors(
	(state: RootState) => state.address,
);

export default addressSlice.reducer;
