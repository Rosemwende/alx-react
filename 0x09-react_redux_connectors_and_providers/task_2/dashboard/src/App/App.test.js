import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { fromJS } from 'immutable';

describe('App Component', () => {
  it('should render correctly with default props', () => {
    const initialState = fromJS({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });

    const wrapper = shallow(
      <App
        isLoggedIn={false}
        displayDrawer={false}
        displayNotificationDrawer={() => {}}
        hideNotificationDrawer={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
