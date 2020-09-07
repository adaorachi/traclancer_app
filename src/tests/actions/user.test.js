import { getUserSuccess } from '../../actions/userAction';

describe('user details', () => {
  it('should create an action to get a user details', () => {
    const userDetails = {
      id: 1,
      first_name: 'Mary',
      last_name: 'Chuka',
      username: 'anny',
      email: 'anny@co.uk',
      status: 'freelancer',
    };
    const expectedAction = {
      type: 'GET_USER',
      payload: userDetails,
    };
    expect(getUserSuccess(userDetails)).toEqual(expectedAction);
  });
});
