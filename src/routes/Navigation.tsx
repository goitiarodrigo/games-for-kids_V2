import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Loader from '@/common/Loader';
import { routes } from './routes';
import PublicRoutes from './PublicRoutes';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<PublicRoutes />} path="/">
                        {routes.map((route) => (
                            <Route
                                element={<route.Component />}
                                key={route.path}
                                path={route.path}
                            />
                        ))}
                        <Route element={<Navigate replace to="/" />} path="/*" />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Navigation;
