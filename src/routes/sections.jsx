import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';


export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SubmissionsPage = lazy(() => import('src/pages/SubmissionsPage'));
export const ProjectSettings = lazy(() => import('src/pages/ProjectSettings'));
export const CreateProjectPage = lazy(() => import('src/pages/createProject'));
export const IntegrationPage = lazy(() => import('src/pages/integration'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'submissions', element: <SubmissionsPage /> },
        { path: 'project-settings', element: <ProjectSettings /> },
        { path: 'create-project', element: <CreateProjectPage /> },
        { path: "integration", element: <IntegrationPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
