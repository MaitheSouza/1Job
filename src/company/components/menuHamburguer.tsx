import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Icon,
	IconButton,
	Link,
	useDisclosure,
	VStack,
	WrapItem,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useCookies } from 'react-cookie';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsBagPlus, BsCardList, BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../candidates/components/header';

export const NavBar = () => {
	const [, , removeCookie] = useCookies();
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef({} as any);
	const goTo = (path: string) => {
		navigate(path);
	};
	const logout = () => {
		removeCookie('access_token', { path: '/' });
		removeCookie('email', { path: '/' });
		window.location.reload();
	};
	return (
		<Box w="100%">
			<Header bg="blue">
				<Button
					backgroundColor="transparent"
					_hover={{ backgroundColor: 'transparent' }}
					_active={{ backgroundColor: 'transparent' }}
					_focus={{ backgroundColor: 'transparent' }}
					role="navigation"
					as={IconButton}
					icon={<HamburgerIcon />}
					color="white"
					variant="ghost"
					onClick={onOpen}
					ref={btnRef}
				/>
				{isOpen && (
					<Drawer
						allowPinchZoom
						finalFocusRef={btnRef}
						isOpen={isOpen}
						onClose={onClose}
					>
						<DrawerOverlay />
						<DrawerContent zIndex={100}>
							<DrawerCloseButton
								color="white"
								backgroundColor="transparent"
								_hover={{ backgroundColor: 'transparent' }}
								_active={{ backgroundColor: 'transparent' }}
								_focus={{ backgroundColor: 'transparent' }}
							/>
							<DrawerHeader
								overflowY="hidden"
								bg="linear-gradient(
									90deg,
									rgba(0, 119, 182, 1) 0%,
									rgba(10, 186, 181, 1) 100%;)"
								pb={36}
								fontSize={20}
								color="black"
								boxShadow="1px 1px 2px gray"
							>
								<WrapItem pt={2}>
									<Avatar src="https://bit.ly/dan-abramov" />
									<Box p={3}>DMS Tecnologia</Box>
								</WrapItem>
								<VStack spacing="24px" pt={6}>
									<Button w="80%">
										<Link href="/company/update">Atualizar Dados</Link>
									</Button>
								</VStack>
							</DrawerHeader>

							<DrawerBody>
								<VStack py={4} justify="flex-start" align="flex-start">
									<Box display="inline-flex" gap={4} alignItems="center">
										<Icon
											className="svg-gradient"
											as={AiOutlineHome}
											w={5}
											h={5}
											color="brand.200"
										/>
										<Link href="/company">Página Inicial</Link>
									</Box>

									<Box display="inline-flex" gap={4} alignItems="center">
										<Icon
											className="svg-gradient"
											as={BsCardList}
											w={5}
											h={5}
											color="brand.200"
										/>
										<Link href="/company/jobs">Lista de Vagas</Link>
									</Box>

									<Box display="inline-flex" gap={4} alignItems="center">
										<Icon
											className="svg-gradient"
											as={BsBagPlus}
											w={5}
											h={5}
											color="brand.200"
										/>
										<Link href="/company/jobs/create">Criar vaga</Link>
									</Box>

									<Box display="inline-flex" gap={4} alignItems="center">
										<Icon
											className="svg-gradient"
											as={BsPeople}
											w={5}
											h={5}
											color="brand.200"
										/>
										<Link href="/company/recruiters">
											Gerenciar recrutadores
										</Link>
									</Box>
								</VStack>
							</DrawerBody>
							<DrawerFooter justifyContent="flex-start" onClick={onClose}>
								<Button
									px={1}
									gap={1}
									color="red"
									variant="outline"
									leftIcon={<BiLogOut />}
									onClick={logout}
									border="none"
									cursor="pointer"
									as="li"
								>
									<Link href="/company">Sair</Link>
								</Button>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				)}
			</Header>
		</Box>
	);
};
