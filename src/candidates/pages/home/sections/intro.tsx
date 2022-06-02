import {
	AspectRatio,
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Img,
	Input,
} from '@chakra-ui/react';
import React from 'react';
import intro from '../../../images/intro.svg';

export const Intro = () => {
	return (
		<Flex px={8} gap={8} justifyContent="space-between">
			<Box w="100%" py="80px">
				<Heading color="black" fontSize={32} letterSpacing="3px" pb={8}>
					Encontre sua vaga de emprego!
				</Heading>

				<Box as="form">
					<HStack w="100%" color="whiteAlpha.900" gap={1}>
						<Input
							color="black"
							placeholder="Digite um cargo"
							w="100%"
							maxW="300px"
							_placeholder={{ opacity: 0.8, color: 'inherit' }}
						/>
						<Button
							type="submit"
							colorScheme="brand.100"
							variant="solid"
							w="fit-content"
							color="black"
						>
							Buscar
						</Button>
					</HStack>
				</Box>
			</Box>
			<Flex alignItems="flex-end">
				<AspectRatio
					className="img-landing"
					ratio={12 / 11}
					width="400px"
					height="400px"
				>
					<Img src={intro} />
				</AspectRatio>
			</Flex>
		</Flex>
	);
};
