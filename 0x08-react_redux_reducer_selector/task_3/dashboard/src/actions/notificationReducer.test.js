import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [],
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the correct state', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: mockNotifications };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle MARK_AS_READ and update the correct notification', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle SET_TYPE_FILTER and update the filter', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual({
      filter: 'URGENT',
      notifications: [],
    });
  });
});
