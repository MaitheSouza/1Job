import { Box } from '@chakra-ui/react';
import { Questions } from '../questions';
import { Intro } from './sections/intro';
import { Services } from './sections/ServiceCard';

export const Landing = () => {
	return (
		<Box>
			<Intro />
			<Services />
			<Questions />
		</Box>
	);
};
