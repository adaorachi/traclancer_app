import React from 'react';

const Auth = React.lazy(() => import('../app/auth/Auth'));
const Dashboard = React.lazy(() => import('../app/components/pages/Dashboard'));
const Projects = React.lazy(() => import('../app/components/pages/Projects'));
const AvailableProjects = React.lazy(() => import('../app/components/single_components/AvailableProjects'));
const ProjectDetail = React.lazy(() => import('../app/components/single_components/ProjectDetail'));
const CreateProject = React.lazy(() => import('../app/forms/CreateProject'));
const ClaimedProjects = React.lazy(() => import('../app/components/pages/ClaimedProjects'));
const ProjectStages = React.lazy(() => import('../app/components/single_components/ProjectStages'));


 export const authRoutes = [
    { path: '/signup', exact: true, name: 'SignUp', component: Auth },
    { path: '/login', exact: true, name: 'Login', component: Auth },
];

export const authorizedRoutes = [
    { path: '/', exact: true, name: 'Default', component: Dashboard },
    { path: '/projects', exact: true, name: 'Projects', component: Projects },
    { path: '/create_project', exact: true, name: 'Create Project', component: CreateProject },
    { path: '/claimed_projects', exact: true, name: 'Project Details', component: ClaimedProjects },
    { path: '/category/:category_slug', exact: true, name: 'Available Projects', component: AvailableProjects },
    { path: '/projects/:project_id', name: 'Project Detail', component: ProjectDetail },
    { path: '/claimed_projects/:stage_id', name: 'Project Stages', component: ProjectStages },
];