import { Box } from '@chakra-ui/react';
import { Intro } from './sections/intro';
import { Questions } from './sections/questions';
import { Services } from './sections/services';

export const Landing = () => {
	return (
		<Box>
			<Intro />
			<Services />
			<Questions />
		</Box>
	);
};
