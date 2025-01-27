import uiReducer from './uiReducer';
import { LOGIN_REQUEST, LOGOUT } from '../actions/uiActionCreators';
import { fromJS } from 'immutable';

describe('uiReducer', () => {
  it('should handle LOGIN_REQUEST', () => {
    const action = {
      type: LOGIN_REQUEST,
      payload: { name: 'John Doe' },
    };
    const initialState = fromJS({
      isUserLoggedIn: false,
      user: null,
      isNotificationDrawerVisible: false,
    });
    const expectedState = fromJS({
      isUserLoggedIn: true,
      user: { name: 'John Doe' },
      isNotificationDrawerVisible: false,
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const initialState = fromJS({
      isUserLoggedIn: true,
      user: { name: 'John Doe' },
      isNotificationDrawerVisible: false,
    });
    const expectedState = fromJS({
      isUserLoggedIn: false,
      user: null,
      isNotificationDrawerVisible: false,
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
