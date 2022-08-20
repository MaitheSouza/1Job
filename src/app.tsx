import { Fragment, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes } from 'react-router-dom';
import { Cadastro } from './candidates/Cadastro';
import { Home } from './candidates/Home';
import { Login } from './candidates/Login';
import { Cadastro1 } from './company/Cadastro';
import { Company } from './company/Home';
import { Login1 } from './company/Login';
import { Logged } from './company/pages/home/logged/home';
import { CreateJob } from './company/pages/home/logged/jobs/create';
import { Jobs } from './company/pages/home/logged/jobs/list';
import { ShowJobs } from './company/pages/home/logged/jobs/showvaga';
import { CreateRecruiters } from './company/pages/home/logged/recruiters/create';
import { DeleteRecruiter } from './company/pages/home/logged/recruiters/delete';
import { Recruiters } from './company/pages/home/logged/recruiters/manage';
import { UpdateRecruiter } from './company/pages/home/logged/recruiters/updateRecruiters';
import { Update } from './company/pages/home/logged/updatedata';

export const App = () => {
	const [{ access_token, email, id }, setCookie, removeCookie] = useCookies();
	const isLogged = Boolean(access_token && email && id);
	useEffect(() => {
		if (!access_token || !email || !id) {
			removeCookie('access_token', { path: '/' });
			removeCookie('email', { path: '/' });
			removeCookie('id', { path: '/' });
		}
	}, []);
	return (
		<Routes>
			<Route path="/">
				{!isLogged && <Route index element={<Home />} />}
				{isLogged && <Route index element={<p>Voce esta logado.</p>} />}
				{isLogged && <Fragment></Fragment>}
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
			</Route>
			<Route path="/company">
				{!isLogged && <Route index element={<Company />} />}
				{isLogged && <Route index element={<Logged />} />}
				{isLogged && (
					<Fragment>
						<Route path="update" element={<Update heading={''} />} />
						<Route path="recruiters">
							<Route path="" element={<Recruiters heading={''} />} />
							<Route path="create" element={<CreateRecruiters heading="" />} />
							<Route path="update" element={<UpdateRecruiter heading="" />} />
							<Route path="delete" element={<DeleteRecruiter />} />
						</Route>

						<Route path="jobs">
							<Route path="" element={<Jobs heading="" />} />
							<Route path="create" element={<CreateJob heading="" />} />
							<Route path="show" element={<ShowJobs heading="" />} />
						</Route>
					</Fragment>
				)}
				<Route path="cadastro" element={<Cadastro1 />} />
				<Route path="login" element={<Login1 />} />
			</Route>
			<Route path="*" element={<p>Não encontrado.</p>} />
		</Routes>
	);
};
