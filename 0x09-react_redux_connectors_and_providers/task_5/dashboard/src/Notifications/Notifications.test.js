import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

describe('<Notifications />', () => {
  it('should call fetchNotifications on mount', () => {
    shallow(<Notifications fetchNotifications={fetchNotifications} />);
    expect(fetchNotifications).toHaveBeenCalled();
  });
});
