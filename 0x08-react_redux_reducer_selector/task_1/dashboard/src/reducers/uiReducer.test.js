import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('returns the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('returns the initial state when the SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('changes isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('changes isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(
      initialState.set('isNotificationDrawerVisible', true),
      { type: HIDE_NOTIFICATION_DRAWER }
    );
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });

  it('sets isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state.get('isUserLoggedIn')).toBe(true);
  });

  it('sets isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });

  it('sets isUserLoggedIn to false when LOGOUT action is passed', () => {
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.get('isUserLoggedIn')).toBe(false);
  });
});
