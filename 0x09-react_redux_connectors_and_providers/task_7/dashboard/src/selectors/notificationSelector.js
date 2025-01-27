import { createSelector } from 'reselect';

const getNotifications = (state) => state.notifications;

const getFilter = (state) => state.filter;

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    let filteredNotifications = notifications.filter(notification => !notification.isRead);

    if (filter === 'urgent') {
      filteredNotifications = filteredNotifications.filter(notification => notification.isUrgent);
    }

    return filteredNotifications;
  }
);
