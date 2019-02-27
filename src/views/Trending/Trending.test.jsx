import enzyme, { mount } from 'enzyme'

import React from 'react'
import Trending from './Trending';

const wrapper = mount(<Trending />)

describe('<Trending />', () => {
    it('fddf', () => {
        if (document.readyState === 'complete') {
            console.log(document.querySelector('.app'))
        }
    })
})