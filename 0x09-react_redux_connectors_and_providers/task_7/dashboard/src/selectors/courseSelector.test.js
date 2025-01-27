import { fromJS } from 'immutable';
import { getAllCourses } from './courseSelector';

describe('courseSelector', () => {
  const state = {
    courses: fromJS({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' },
      3: { id: 3, name: 'Course 3' },
    }),
  };

  it('should return all courses as a List', () => {
    const result = getAllCourses(state);
    expect(result.toJS()).toEqual([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ]);
  });

  it('should return an empty List if no courses exist', () => {
    const emptyState = { courses: fromJS({}) };
    const result = getAllCourses(emptyState);
    expect(result.size).toBe(0);
  });

  it('should return an empty List if courses is null', () => {
    const nullState = { courses: null };
    const result = getAllCourses(nullState);
    expect(result.size).toBe(0);
  });
});
