import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications Component', () => {
  const mockFetchNotifications = jest.fn();
  const mockMarkAsRead = jest.fn();
  const notifications = [
    { id: 1, value: 'Notification 1' },
    { id: 2, value: 'Notification 2' },
  ];

  const defaultProps = {
    listNotifications: notifications,
    fetchNotifications: mockFetchNotifications,
    markAsRead: mockMarkAsRead,
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications {...defaultProps} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls fetchNotifications on componentDidMount', () => {
    shallow(<Notifications {...defaultProps} />);
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('calls markAsRead when a notification is clicked', () => {
    const wrapper = shallow(<Notifications {...defaultProps} />);
    wrapper.find('li').at(0).simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(notifications[0].id);
  });

  it('renders the correct number of notifications', () => {
    const wrapper = shallow(<Notifications {...defaultProps} />);
    expect(wrapper.find('li')).toHaveLength(notifications.length);
  });
});
