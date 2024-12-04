import { schema, normalize } from 'normalizr';

export const notification = new schema.Entity('notifications');
export const notificationsList = [notification];

export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, notificationsList);
  return normalizedData.entities.notifications || {};
};
