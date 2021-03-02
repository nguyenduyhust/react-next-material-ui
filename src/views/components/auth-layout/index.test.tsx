import React from 'react';
import { mount } from 'enzyme';
import Component from '.';

describe('Component test', () => {
  test('Renders correctly', () => {
    const tree = mount(<Component />).html();
    expect(tree).toMatchSnapshot();
  });
});
