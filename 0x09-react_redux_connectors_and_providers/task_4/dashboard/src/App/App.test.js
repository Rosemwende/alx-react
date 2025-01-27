import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fromJS } from 'immutable';

const mockState = fromJS({
  courses: {},
  notifications: {},
  ui: {
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
  },
});

describe('App Component', () => {
  it('should map state to props correctly', () => {
    const mapStateToProps = (state) => ({
      isLoggedIn: state.getIn(['ui', 'isUserLoggedIn']),
      displayDrawer: state.getIn(['ui', 'isNotificationDrawerVisible']),
    });

    const props = mapStateToProps(mockState);
    expect(props.isLoggedIn).toBe(false);
    expect(props.displayDrawer).toBe(false);
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
