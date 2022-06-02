import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://1job-gateway-production.up.railway.app',
	headers: {
		'Content-type': 'application/json',
	},
});
