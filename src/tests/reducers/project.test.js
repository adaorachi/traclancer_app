import { projectCatReducer } from '../../reducers/projectReducer';

describe('Project Reducer', () => {
  it('should return the initial state', () => {
    expect(projectCatReducer(undefined, {})).toEqual([]);
  });

  it('should handle getting appointments', () => {
    expect(
      projectCatReducer([], {
        type: 'GET_PROJECT_CATEGORIES',
        payload: [{
          title: 'Web Developement with Ruby',
          id: 1,
          slug: 'web-development-with-ruby',
          description: 'This is about web development',
        }],
      }),
    ).toEqual([
      {
        title: 'Web Developement with Ruby',
        id: 1,
        slug: 'web-development-with-ruby',
        description: 'This is about web development',
      },
    ]);
  });
});
