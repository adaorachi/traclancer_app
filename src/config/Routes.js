import React from 'react';

const Auth = React.lazy(() => import('../app/auth/Auth'));
const Dashboard = React.lazy(() => import('../app/components/pages/Dashboard'));
const Projects = React.lazy(() => import('../app/components/pages/Projects'));
const AvailableProjects = React.lazy(() => import('../app/components/pages/AvailableProjects'));
const MyProject = React.lazy(() => import('../app/components/pages/MyProject'));
const CreateProject = React.lazy(() => import('../app/forms/CreateProject'));
const ProjectDetails = React.lazy(() => import('../app/components/pages/ProjectDetails'));


 export const authRoutes = [
    { path: '/signup', exact: true, name: 'SignUp', component: Auth },
    { path: '/login', exact: true, name: 'Login', component: Auth },
];

export const authorizedRoutes = [
    { path: '/dashboard', exact: true, name: 'Default', component: Dashboard },
    { path: '/projects', exact: true, name: 'Projects', component: Projects },
    { path: '/available_projects', exact: true, name: 'Available Projects', component: AvailableProjects },
    { path: '/my_project', exact: true, name: 'My Project', component: MyProject },
    { path: '/create_project', exact: true, name: 'Create Project', component: CreateProject },
    { path: '/project_details', exact: true, name: 'Project Details', component: ProjectDetails },

];