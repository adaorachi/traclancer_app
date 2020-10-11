import { getProjectCatSuccess, getCategoryProjectSuccess } from '../../actions/projectAction';

describe('project categories', () => {
  it('should create an action to get all project categories', () => {
    const projectCategories = {
      title: 'Web Developement with Ruby',
      id: 1,
      slug: 'web-development-with-ruby',
      description: 'This is about web development',
    };
    const expectedAction = {
      type: 'GET_PROJECT_CATEGORIES',
      payload: projectCategories,
    };
    expect(getProjectCatSuccess(projectCategories)).toEqual(expectedAction);
  });

  it('should create an action to get all projects under a category', () => {
    const projects = {
      title: 'Web Developement with Ruby',
      id: 1,
      slug: 'web-development-with-ruby',
      projects: [{
        id: 5,
        completed: false,
        title: 'Build a Tresom app for my company',
        budget: '1000',
        description: 'I need a developer to build an app for me.',
      }],
    };
    const expectedAction = {
      type: 'GET_CATEGORY_PROJECTS',
      payload: projects,
    };
    expect(getCategoryProjectSuccess(projects)).toEqual(expectedAction);
  });
});
