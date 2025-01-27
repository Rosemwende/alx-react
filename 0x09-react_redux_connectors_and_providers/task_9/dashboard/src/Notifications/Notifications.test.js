import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('should render a message when there are no notifications', () => {
    const wrapper = shallow(<Notifications notifications={{ size: 0 }} />);
    expect(wrapper.find('p').text()).toBe('No new notifications!');
  });

  it('should render the list of notifications', () => {
    const notifications = {
      size: 2,
      map: jest.fn().mockImplementation((cb) => {
        cb({ get: jest.fn().mockReturnValue('Test notification 1') });
        cb({ get: jest.fn().mockReturnValue('Test notification 2') });
      }),
    };
    const wrapper = shallow(<Notifications notifications={notifications} />);
    expect(wrapper.find('p').length).toBe(2);
  });
});
