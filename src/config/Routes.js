import React from 'react';

const Dashboard = React.lazy(() => import('../app/components/pages/Dashboard'));
const Projects = React.lazy(() => import('../app/components/pages/Projects'));
const Auth = React.lazy(() => import('../app/auth/Auth'));


 export const authRoutes = [
    { path: '/signup', exact: true, name: 'SignUp', component: Auth },
    { path: '/login', exact: true, name: 'Login', component: Auth },
];

export const authorizedRoutes = [
    { path: '/dashboard', exact: true, name: 'Default', component: Dashboard },
    { path: '/projects', exact: true, name: 'Projects', component: Projects },
];