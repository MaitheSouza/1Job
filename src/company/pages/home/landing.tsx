import { Box } from '@chakra-ui/react';
import { Intro } from './sections/intro';
import { Services } from './sections/ServiceCard';

export const Landing = () => {
	return (
		<Box>
			<Intro />
			<Services />
		</Box>
	);
};
