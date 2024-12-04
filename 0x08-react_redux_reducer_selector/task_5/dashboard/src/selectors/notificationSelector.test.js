import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('Notification Selectors', () => {
  const mockState = fromJS({
    filter: 'URGENT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    },
  });

  it('filterTypeSelected should return the filter type', () => {
    const result = filterTypeSelected(mockState);
    expect(result).toEqual('URGENT');
  });

  it('getNotifications should return the list of notifications', () => {
    const result = getNotifications(mockState);
    expect(result.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(mockState);
    expect(result.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });
});
