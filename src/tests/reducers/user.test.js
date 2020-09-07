import userReducer from '../../reducers/userReducer';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      logged_in: false,
      status: 'not_logged_in',
    });
  });

  it('should handle user details', () => {
    expect(
      userReducer([], {
        type: 'GET_USER',
        payload: {
          id: 1,
          first_name: 'Mary',
          last_name: 'Chuka',
          username: 'anny',
          email: 'anny@co.uk',
          status: 'freelancer',
        },
      }),
    ).toEqual(
      {
        id: 1,
        first_name: 'Mary',
        last_name: 'Chuka',
        username: 'anny',
        email: 'anny@co.uk',
        status: 'freelancer',
      },
    );
  });
});
