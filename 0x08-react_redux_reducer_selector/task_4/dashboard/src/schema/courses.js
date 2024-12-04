import { schema } from 'normalizr';

export const course = new schema.Entity('courses');
export const coursesList = [course];

export const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, coursesList);
  return normalizedData.entities.courses || {};
};
