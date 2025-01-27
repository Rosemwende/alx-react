import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('mapStateToProps', () => {
  it('should return the correct object', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });
    const expected = { isLoggedIn: true };
    const result = mapStateToProps(state);
    expect(result).toEqual(expected);
  });
});
