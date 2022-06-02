import { AspectRatio, Box, Flex, Heading, Img, VStack } from '@chakra-ui/react';
import React from 'react';
import { Commitment } from '../../../components/commitment';
import computer from '../../../images/computer.png';

export const Commitments = () => {
	return (
		<Flex
			id="journey"
			gap={24}
			px={4}
			bg="brand.200"
			alignItems="center"
			justifyContent="space-between"
		>
			<Box py="80px" px={5}>
				<Heading color="white" fontSize={32} letterSpacing="3px" py={6}>
					Acreditamos no seu sucesso
				</Heading>
				<VStack alignItems="flex-start" color="white" spacing="30px">
					<Commitment text={'Lorem Ipsum'} />
					<Commitment text={'Lorem Ipsum'} />
					<Commitment text={'Lorem Ipsum'} />
				</VStack>
			</Box>
			<AspectRatio
				className="img-landing"
				ratio={8 / 10}
				width="400px"
				height="400px"
				mr="100px"
			>
				<Img src={computer} />
			</AspectRatio>
		</Flex>
	);
};
