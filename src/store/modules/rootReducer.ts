import { combineReducers } from '@reduxjs/toolkit';

import notificationSlice from './notifications/notificationsSlice';
import usersSlice from './users/usersSlice';

const rootReducer = combineReducers({
	users: usersSlice,
	notifications: notificationSlice,
});

export default rootReducer;
