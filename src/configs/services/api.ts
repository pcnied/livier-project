import axios from 'axios';

const env = import.meta.env.VITE_ENV;
const baseURL =
	env === 'DEVELOPMENT'
		? import.meta.env.VITE_API_URL_DEVELOPMENT
		: import.meta.env.VITE_API_URL_PRODUCTION;

export const api = axios.create({
	baseURL,
});
