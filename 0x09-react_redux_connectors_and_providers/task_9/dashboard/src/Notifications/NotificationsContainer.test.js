import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';
import Notifications from './Notifications';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

describe('<NotificationsContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotifications} notifications={{}} />);
  });

  it('should call fetchNotifications on mount', () => {
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it('should render <Notifications />', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });
});
