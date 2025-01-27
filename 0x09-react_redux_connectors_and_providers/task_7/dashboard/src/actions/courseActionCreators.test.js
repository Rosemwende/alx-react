import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { setCourses, fetchCourses } from './courseActionCreators';
import { SET_COURSES } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('courseActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to set courses', () => {
    const data = [{ id: 1, name: 'Course 1' }];
    const expectedAction = {
      type: SET_COURSES,
      data,
    };
    expect(setCourses(data)).toEqual(expectedAction);
  });

  it('fetchCourses dispatches setCourses on successful API call', async () => {
    const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
    fetchMock.getOnce('/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [{ type: SET_COURSES, data: courses }];
    const store = mockStore({});

    await store.dispatch(fetchCourses());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fetchCourses handles errors gracefully', async () => {
    fetchMock.getOnce('/courses.json', 500);

    const store = mockStore({});
    await store.dispatch(fetchCourses());
    expect(store.getActions()).toEqual([]);
  });
});
