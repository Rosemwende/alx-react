import { createSelector } from 'reselect';
import { List } from 'immutable';

const getCourses = (state) => state.courses;

export const getAllCourses = createSelector(getCourses, (courses) => {
  return courses ? courses.valueSeq().toList() : List();
});
