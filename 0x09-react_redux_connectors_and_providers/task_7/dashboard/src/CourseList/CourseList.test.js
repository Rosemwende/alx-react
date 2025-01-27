import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

jest.mock('../actions/courseActionCreators');

describe('CourseList Component', () => {
  let wrapper;

  beforeEach(() => {
    fetchCourses.mockClear();
    selectCourse.mockClear();
    unSelectCourse.mockClear();
  });

  it('should dispatch fetchCourses on mount', () => {
    shallow(<CourseList fetchCourses={fetchCourses} selectCourse={selectCourse} unSelectCourse={unSelectCourse} />);
    expect(fetchCourses).toHaveBeenCalledTimes(1);
  });

  it('should dispatch selectCourse when a checkbox is checked', () => {
    const course = { id: '1', name: 'Course 1', isSelected: false };
    const wrapper = shallow(
      <CourseList fetchCourses={fetchCourses} selectCourse={selectCourse} unSelectCourse={unSelectCourse} courses={[course]} />
    );
    wrapper.instance().onChangeRow(course.id, true);
    expect(selectCourse).toHaveBeenCalledWith(course.id);
  });

  it('should dispatch unSelectCourse when a checkbox is unchecked', () => {
    const course = { id: '1', name: 'Course 1', isSelected: true };
    const wrapper = shallow(
      <CourseList fetchCourses={fetchCourses} selectCourse={selectCourse} unSelectCourse={unSelectCourse} courses={[course]} />
    );
    wrapper.instance().onChangeRow(course.id, false);
    expect(unSelectCourse).toHaveBeenCalledWith(course.id);
  });
});
