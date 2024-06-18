import { Outlet } from 'react-router';

import Layout from '@/Components/Layout/Layout';

const PublicRoutes = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default PublicRoutes;
