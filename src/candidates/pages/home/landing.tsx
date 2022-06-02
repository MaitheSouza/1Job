import { Box } from '@chakra-ui/react';
import React from 'react';
import { Commitments } from './sections/commitments';
import { Intro } from './sections/intro';
import { Services } from './sections/services';

export const Landing = () => {
	return (
		<Box>
			<Intro />
			<Services />
			<Commitments />
		</Box>
	);
};
