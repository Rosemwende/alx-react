import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h2>Courses</h2>
        <table>
          <tbody>
            {courses.map(course => (
              <CourseListRow
                key={course.id}
                course={course}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
