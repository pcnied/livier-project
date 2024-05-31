import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { api } from '../../../configs/services/api';
import { User, UserLogged } from '../../../types/user';
import { showNotification } from '../notifications/notificationsSlice';

export const createUser = createAsyncThunk(
	'users/createUser',
	async (user: User, { dispatch }) => {
		try {
			const response = await api.post(`/customers/create`, {
				name: user.name,
				email: user.email,
				password: user.password,
				acceptedTerms: true,
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

export const loginUser = createAsyncThunk(
	'users/loginUser',
	async (user: UserLogged, { dispatch }) => {
		try {
			const response = await api.post(`/customers/login`, {
				email: user.email,
				password: user.password,
			});

			dispatch(
				showNotification({
					success: true,
					status: response.data.status,
				}),
			);

			Cookies.set('auth', response.data.token, { expires: 7 });

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

const usersSlice = createSlice({
	initialState: {
		name: '',
		email: '',
		loading: false,
		status: '',
	},
	name: 'users',
	extraReducers: (builder) => {
		// criação de um usuário
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.loading = false;
			state.status = action.payload.status;
		});
		builder.addCase(createUser.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando enquanto validamos os dados...';
		});
		builder.addCase(createUser.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});

		// login do usuário
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.loading = false;

			if (action.payload.success) {
				state.name = action.payload.body.name;
				state.email = action.payload.body.email;
			}

			state.status = action.payload.status;
		});
		builder.addCase(loginUser.pending, (state) => {
			state.loading = true;
			state.status = 'Aguardando a busca do usuário no banco de dados';
		});
		builder.addCase(loginUser.rejected, (state) => {
			state.loading = false;
			state.status = 'Deu ruim na requisição';
		});
	},
	reducers: {},
});

export default usersSlice.reducer;
