import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Action to select a course
 * @param {number} index - Index of the course to select
 * @returns {Object} Action object
 */
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

/**
 * Action to unselect a course
 * @param {number} index - Index of the course to unselect
 * @returns {Object} Action object
 */
export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

import { bindActionCreators } from 'redux';

export const boundCourseActions = (dispatch) => bindActionCreators(
  { selectCourse, unSelectCourse },
  dispatch
);
