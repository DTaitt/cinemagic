import enzyme, { shallow } from 'enzyme'

import App from './App';
import React from 'react';

const wrapper = shallow(<App />)

describe('<App />', () => {
  it('renders <Header />', () => {
    expect(wrapper.exists('Header')).toBe(true)
  })
  it('renders <Routes />', () => {
    expect(wrapper.exists('Routes')).toBe(true)
  })
});
