import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('returns the initial state when the SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('changes isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(
      { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} },
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('sets isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('sets isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('sets isUserLoggedIn to false when LOGOUT action is passed', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state.isUserLoggedIn).toBe(false);
  });
});
