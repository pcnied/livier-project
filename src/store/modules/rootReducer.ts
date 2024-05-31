import { combineReducers } from '@reduxjs/toolkit';

import addressSlice from './address/addressSlice';
import cartsSlice from './carts/cartsSlice';
import notificationSlice from './notifications/notificationsSlice';
import productsSlice from './products/productsSlice';
import usersSlice from './users/usersSlice';

const rootReducer = combineReducers({
	products: productsSlice,
	users: usersSlice,
	notifications: notificationSlice,
	carts: cartsSlice,
	address: addressSlice,
});

export default rootReducer;
