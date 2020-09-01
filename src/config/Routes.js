import Dashboard from '../app/components/pages/Dashboard';
import Auth from '../app/auth/Auth';
import Projects from '../app/components/pages/Projects';
import AvailableProjects from '../app/components/single_components/AvailableProjects';
import ProjectDetail from '../app/components/single_components/ProjectDetail';
import CreateProject from '../app/forms/CreateProject';
import ClaimedProjects from '../app/components/pages/ClaimedProjects';
import ProjectStages from '../app/components/single_components/ProjectStages';

export const authRoutes = [
  {
    path: '/signup', exact: true, name: 'SignUp', component: Auth,
  },
  {
    path: '/login', exact: true, name: 'Login', component: Auth,
  },
];

export const authorizedRoutes = [
  {
    path: '/', exact: true, name: 'Default', component: Dashboard,
  },
  {
    path: '/projects', exact: true, name: 'Projects', component: Projects,
  },
  {
    path: '/create_project', exact: true, name: 'Create Project', component: CreateProject,
  },
  {
    path: '/claimed_projects', exact: true, name: 'Project Details', component: ClaimedProjects,
  },
  {
    path: '/category/:category_slug', exact: true, name: 'Available Projects', component: AvailableProjects,
  },
  { path: '/projects/:project_id', name: 'Project Detail', component: ProjectDetail },
  { path: '/claimed_projects/:stage_id', name: 'Project Stages', component: ProjectStages },
];
