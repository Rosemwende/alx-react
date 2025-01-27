import rootReducer from './rootReducer';
import { fromJS } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      courses: {},
      notifications: {},
      ui: {},
    });

    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
