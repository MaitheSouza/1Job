import { Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useSearchParams } from 'react-router-dom';
import { api } from '../../../../../utils/api';

export const DeleteRecruiter = () => {
	const [loading, setLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const [{ access_token, id }, setCookie] = useCookies();
	useEffect(() => {
		api
			.delete(`/api/recrutadores/${searchParams.get('recruiter_id')}`, {
				headers: {
					Authorization: access_token,
				},
			})
			.then((success) => {
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
			});
	}, []);
	if (loading) return <Spinner />;
	return <Navigate replace to="/company/recruiters" />;
};
