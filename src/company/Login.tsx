import { Heading, Link, VStack } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { Landing } from './pages/login/landing';

import { useLocation } from 'react-router-dom';

export const LoginEmpresa = () => {
	const { pathname } = useLocation();
	const pathHome = pathname.includes('company') ? '/company' : '/';
	const [{ access_token, email }] = useCookies();
	if (access_token && email) return <Navigate to="/company" />;
	return (
		<VStack
			id="jobs"
			alignItems="center"
			p="10"
			maxW="100%"
			minH="100vh"
			backgroundImage="images/BgLoginCadastro.png"
		>
			<VStack
				pt={10}
				borderRadius={10}
				boxShadow="0px 2px 5px 0px #2A4365"
				w="100%"
				px={2}
				maxW="500px"
				bg="white"
			>
				<Heading color="white" fontSize={32}>
					<Link className="g-text" alignItems="center" href={pathHome}>
						<svg
							width="70"
							height="50"
							fill="none"
							viewBox="0 0 80 56"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.14062 7.89941C0.929036 7.37858 1.12435 7.00423 1.72656 6.77637C2.97982 6.30436 4.16797 5.54753 5.29102 4.50586C6.41406 3.46419 7.30111 2.53646 7.95215 1.72266C8.42415 1.13672 8.87988 0.84375 9.31934 0.84375H11.3945C12.1432 0.84375 12.5176 1.20996 12.5176 1.94238V34.9014C12.5176 35.6338 12.1514 36 11.4189 36H9.31934C8.58691 36 8.2207 35.6338 8.2207 34.9014V8.14355C8.2207 7.65527 8.23698 7.16699 8.26953 6.67871H8.2207C7.71615 7.31348 6.97559 7.96452 5.99902 8.63184C5.02246 9.29915 4.12728 9.78743 3.31348 10.0967C2.59733 10.3734 2.12533 10.2432 1.89746 9.70605L1.14062 7.89941Z"
								fill="#0077B6"
							/>
							<path
								className="svg-gradient"
								d="M24.0156 6.39062C23.375 6.39062 22.8281 6.61719 22.375 7.07031C21.9219 7.52344 21.6953 8.07031 21.6953 8.71094V10.8203C21.6953 11.4609 21.9219 12.0078 22.375 12.4609C22.8281 12.9141 23.375 13.1406 24.0156 13.1406C24.6562 13.1406 25.1953 12.9141 25.6328 12.4609C26.0859 12.0078 26.3125 11.4609 26.3125 10.8203V8.71094C26.3125 8.07031 26.0859 7.52344 25.6328 7.07031C25.1953 6.61719 24.6562 6.39062 24.0156 6.39062ZM24.1094 15.8359H26.3125V38.8047C26.2344 42.2266 25.0859 45.0938 22.8672 47.4062C20.6641 49.7344 17.9688 50.8984 14.7812 50.8984C13.125 50.8984 11.5703 50.5547 10.1172 49.8672L12.9531 47.0312C13.4688 46.5312 14.0781 46.2812 14.7812 46.2812C16.6875 46.2812 18.3203 45.5469 19.6797 44.0781C21.0234 42.625 21.6953 40.8672 21.6953 38.8047V18.2266C21.6953 17.5703 21.9297 17.0078 22.3984 16.5391C22.8672 16.0703 23.4375 15.8359 24.1094 15.8359ZM40.2109 15.8359C43.3984 15.8359 46.1172 17.0156 48.3672 19.375C50.6328 21.7344 51.7656 24.5859 51.7656 27.9297C51.7656 31.2578 50.6328 34.1016 48.3672 36.4609C46.1172 38.8203 43.3984 40 40.2109 40C37.0234 40 34.2969 38.8203 32.0312 36.4609C29.7812 34.1016 28.6562 31.2578 28.6562 27.9297C28.6562 24.5859 29.7812 21.7344 32.0312 19.375C34.2969 17.0156 37.0234 15.8359 40.2109 15.8359ZM40.2109 35.3828C42.1172 35.3828 43.75 34.6562 45.1094 33.2031C46.4688 31.75 47.1484 29.9922 47.1484 27.9297C47.1484 25.8516 46.4688 24.0859 45.1094 22.6328C43.75 21.1797 42.1172 20.4531 40.2109 20.4531C38.2891 20.4531 36.6484 21.1797 35.2891 22.6328C33.9453 24.0859 33.2734 25.8516 33.2734 27.9297C33.2734 29.9922 33.9453 31.75 35.2891 33.2031C36.6484 34.6562 38.2891 35.3828 40.2109 35.3828ZM54.1094 10.2344C54.1094 9.17188 54.4844 8.26562 55.2344 7.51562C55.9844 6.76562 56.8906 6.39062 57.9531 6.39062H58.7266V18.25C60.7422 16.6406 63.0547 15.8359 65.6641 15.8359C68.8516 15.8359 71.5703 17.0156 73.8203 19.375C76.0859 21.7344 77.2188 24.5859 77.2188 27.9297C77.2188 31.2578 76.0859 34.1016 73.8203 36.4609C71.5703 38.8203 68.8516 40 65.6641 40C63.0547 40 60.7422 39.1953 58.7266 37.5859C58.7266 38.2422 58.4922 38.8047 58.0234 39.2734C57.5703 39.7266 57.0156 39.9531 56.3594 39.9531H54.1094V10.2344ZM58.7266 27.9531C58.7891 30 59.4844 31.7188 60.8125 33.1094C62.1406 34.4844 63.7578 35.1719 65.6641 35.1719C67.5703 35.1719 69.2031 34.4688 70.5625 33.0625C71.9219 31.6406 72.6016 29.9297 72.6016 27.9297C72.6016 25.9141 71.9219 24.2031 70.5625 22.7969C69.2031 21.375 67.5703 20.6641 65.6641 20.6641C63.7578 20.6641 62.1406 21.3594 60.8125 22.75C59.4844 24.125 58.7891 25.8359 58.7266 27.8828V27.9531Z"
								fill="none"
							/>
						</svg>
					</Link>
				</Heading>
				<Landing heading="login" />
			</VStack>
		</VStack>
	);
};
