import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { setNotificationFilter } from '../actions/notificationActionCreators';

describe('<Notifications />', () => {
  let wrapper;
  let mockSetNotificationFilter;

  beforeEach(() => {
    mockSetNotificationFilter = jest.fn();
    wrapper = shallow(<Notifications setNotificationFilter={mockSetNotificationFilter} notifications={[]} />);
  });

  it('clicking the urgent button should call setNotificationFilter with URGENT', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('clicking the default button should call setNotificationFilter with DEFAULT', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('default');
  });
});
