import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './styles/global.css';

const colors = {
	brand: {
		100: '#0ABAB5',
		200: '#0077B6',
		300: '#2a69ac',
	},
};

export const theme = extendTheme({
	colors,
	font: {
		heading: 'Montserrat',
		body: 'Montserrat',
	},
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
	<React.StrictMode>
		<Helmet>
			<meta
				http-equiv="Content-Security-Policy"
				content="default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';"
			/>
		</Helmet>
		<ChakraProvider theme={theme}>
			<CookiesProvider>
				<BrowserRouter>
					<svg width="0" height="0">
						<linearGradient
							id="blue-gradient"
							x1="100%"
							y1="100%"
							x2="0%"
							y2="0%"
						>
							<stop stopColor="#0abab5" offset="0%" />
							<stop stopColor="#0077b6" offset="100%" />
						</linearGradient>
					</svg>
					<App />
				</BrowserRouter>
			</CookiesProvider>
		</ChakraProvider>
	</React.StrictMode>
);
