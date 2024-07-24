import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders the correct text', () => {
    const wrapper = shallow(<MyComponent text="Hello, World!" />);
    expect(wrapper.text()).toEqual('Hello, World!');
  });
});