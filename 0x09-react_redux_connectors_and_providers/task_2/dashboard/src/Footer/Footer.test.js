import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('should render correctly with user prop', () => {
    const wrapper = shallow(<Footer user={{ name: 'John Doe' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without user prop', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
