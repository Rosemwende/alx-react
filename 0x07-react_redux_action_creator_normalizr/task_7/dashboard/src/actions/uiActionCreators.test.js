import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [require('redux-thunk').default];
const mockStore = configureStore(middlewares);

describe('loginRequest async action', () => {
  afterEach(() => {
    fetchMock.restore(); // Clean up fetch mocks after each test
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when API returns success', async () => {
    const user = {
      email: 'john.doe@domain.com',
      password: 'password123',
    };
    
    fetchMock.getOnce('/login-success.json', {
      body: user,
      status: 200,
    });

    const store = mockStore({});
    const expectedActions = [
      { type: LOGIN, user },
      { type: LOGIN_SUCCESS, user },
    ];

    await store.dispatch(loginRequest(user.email, user.password));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API returns an error', async () => {
    const user = {
      email: 'john.doe@domain.com',
      password: 'password123',
    };

    fetchMock.getOnce('/login-success.json', {
      status: 500,
      body: { message: 'Internal Server Error' },
    });

    const store = mockStore({});
    const expectedActions = [
      { type: LOGIN, user },
      { type: LOGIN_FAILURE, error: 'Login failed' },
    ];

    await store.dispatch(loginRequest(user.email, user.password));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
