import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import { Commitment } from '../../../components/commitment';

export const Commitments = () => {
	return (
		<Flex
			id="journey"
			px={10}
			alignItems="center"
			justifyContent="space-between"
		>
			<Box py={20} px={8}>
				<Heading color="white" fontSize={32} letterSpacing="3px" py={6}>
					Acreditamos no seu sucesso
				</Heading>
				<VStack alignItems="flex-start" color="whiteAlpha.900" spacing="30px">
					<Commitment text={'Lorem Ipsum'} />
					<Commitment text={'Lorem Ipsum'} />
					<Commitment text={'Lorem Ipsum'} />
				</VStack>
			</Box>
		</Flex>
	);
};
