import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	VStack,
} from '@chakra-ui/react';

export const Questions = () => {
	return (
		<Box
			id="journey"
			px={8}
			gap={8}
			alignItems="center"
			justifyContent="space-between"
			backgroundImage="images/backgroundQuestions.png"
		>
			<Heading ml={7} p={10} pt={20}>
				Dúvidas
			</Heading>
			<VStack ml={7} px={8} pb={35}>
				<Accordion allowToggle w="98%" pb={5}>
					<AccordionItem
						borderRadius={10}
						bg="white"
						boxShadow="0px 2px 8px 0px #D3CBC2"
					>
						<AccordionButton boxShadow="0px 0px 5px 0px #D3CBC2">
							<Box className="g-text" flex="1" textAlign="left" p={1}>
								Section 1 title - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion allowToggle w="98%" pb={5}>
					<AccordionItem
						borderRadius={10}
						bg="white"
						boxShadow="0px 2px 8px 0px #D3CBC2"
					>
						<AccordionButton boxShadow="0px 0px 5px 0px #D3CBC2">
							<Box className="g-text" flex="1" textAlign="left" p={1}>
								Section 1 title - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion allowToggle w="98%" pb={5}>
					<AccordionItem
						borderRadius={10}
						bg="white"
						boxShadow="0px 2px 8px 0px #D3CBC2"
					>
						<AccordionButton boxShadow="0px 0px 5px 0px #D3CBC2">
							<Box className="g-text" flex="1" textAlign="left" p={1}>
								Section 1 title - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion allowToggle w="98%" pb={5}>
					<AccordionItem
						bg="white"
						borderRadius={10}
						boxShadow="0px 2px 8px 0px #D3CBC2"
					>
						<AccordionButton boxShadow="0px 0px 5px 0px #D3CBC2">
							<Box className="g-text" flex="1" textAlign="left" p={1}>
								Section 1 title - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion allowToggle w="98%" pb={5}>
					<AccordionItem
						bg="white"
						borderRadius={10}
						boxShadow="0px 2px 8px 0px #D3CBC2"
					>
						<AccordionButton boxShadow="0px 0px 5px 0px #D3CBC2">
							<Box className="g-text" flex="1" textAlign="left" p={1}>
								Section 1 title - Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua?
							</Box>
							<AccordionIcon />
						</AccordionButton>

						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</VStack>
		</Box>
	);
};
