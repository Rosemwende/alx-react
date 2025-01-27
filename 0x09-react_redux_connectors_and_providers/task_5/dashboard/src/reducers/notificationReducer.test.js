import { notificationReducer } from './notificationReducer';
import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';

describe('notificationReducer tests', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(
      fromJS({
        notifications: [],
        loading: false,
      })
    );
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      loading: true,
    };
    const state = notificationReducer(undefined, action);
    expect(state.get('loading')).toBe(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, value: 'New notification' }],
    };
    const state = notificationReducer(undefined, action);
    expect(state.get('notifications').size).toBe(1);
  });
});
