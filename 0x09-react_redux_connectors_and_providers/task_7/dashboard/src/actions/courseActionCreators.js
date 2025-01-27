import { SET_COURSES } from './courseActionTypes';

export const setCourses = (data) => ({
  type: SET_COURSES,
  data,
});

export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/courses.json');
      if (response.ok) {
        const data = await response.json();
        dispatch(setCourses(data));
      } else {
        console.error('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
};
