import { getUnreadNotificationsByType } from './notificationSelector';
import { fromJS } from 'immutable';

describe('Selectors', () => {
  it('should return all unread notifications when the filter is default', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, read: false, urgent: true, message: 'Urgent notification' },
        2: { id: 2, read: false, urgent: false, message: 'Regular notification' },
        3: { id: 3, read: true, urgent: false, message: 'Read notification' },
      },
      filter: 'default',
    });

    const result = getUnreadNotificationsByType(state);

    expect(result.size).toBe(2);
    expect(result.get(0).get('message')).toBe('Urgent notification');
    expect(result.get(1).get('message')).toBe('Regular notification');
  });

  it('should return only urgent unread notifications when the filter is urgent', () => {
    const state = fromJS({
      notifications: {
        1: { id: 1, read: false, urgent: true, message: 'Urgent notification' },
        2: { id: 2, read: false, urgent: false, message: 'Regular notification' },
        3: { id: 3, read: true, urgent: true, message: 'Read urgent notification' },
      },
      filter: 'urgent',
    });

    const result = getUnreadNotificationsByType(state);

    expect(result.size).toBe(1);
    expect(result.get(0).get('message')).toBe('Urgent notification');
  });
});
