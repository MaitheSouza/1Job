import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://1job.tec.br',
	headers: {
		'Content-type': 'application/json',
	},
});
