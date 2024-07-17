import { Outlet, Navigate } from 'react-router';

import Layout from '@/Components/Layout/Layout';

const PublicRoutes = () => {
    return <Layout>{localStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" />}</Layout>;
};

export default PublicRoutes;
