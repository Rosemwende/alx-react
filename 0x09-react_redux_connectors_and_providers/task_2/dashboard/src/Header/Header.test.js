import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render correctly with user prop', () => {
    const wrapper = shallow(<Header user={{ name: 'John Doe' }} logout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without user prop', () => {
    const wrapper = shallow(<Header logout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
