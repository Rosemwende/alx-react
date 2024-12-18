import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {},
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: mockNotifications };
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      },
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const state = notificationReducer(initialState, action);
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: true },
      },
    });
  });
});
