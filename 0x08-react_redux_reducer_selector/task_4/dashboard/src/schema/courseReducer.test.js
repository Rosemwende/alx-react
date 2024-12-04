import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  const mockCourses = [
    { id: 1, name: 'React', credit: 3 },
    { id: 2, name: 'Redux', credit: 2 },
    { id: 3, name: 'Normalizr', credit: 1 },
  ];

  it('should return the default state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({});
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: mockCourses };
    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual({
      1: { id: 1, name: 'React', credit: 3 },
      2: { id: 2, name: 'Redux', credit: 2 },
      3: { id: 3, name: 'Normalizr', credit: 1 },
    });
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      1: { id: 1, name: 'React', credit: 3 },
      2: { id: 2, name: 'Redux', credit: 2 },
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual({
      1: { id: 1, name: 'React', credit: 3, isSelected: true },
      2: { id: 2, name: 'Redux', credit: 2 },
    });
  });
});
