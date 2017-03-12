/* eslint-env jasmine */
import React from 'react'
import {mount} from 'enzyme'
import Count from '../../../app/components/Count'
import mockStore from 'redux-mock-store'
import {Provider} from 'react-redux'

describe('[COMPONENTS]', () => {
  it('Count.jsx', (done) => {
    let store = mockStore()({
      count: {
        obj: {
          avatar_url: 'https://avatars0.githubusercontent.com/u/583231?v=3'
        }
      }
    })
    const component = mount(<Provider store={store}><Count /></Provider>)
    expect(component.find('._1t5AC-XgEPG4oT1bzBW2xZ').text()).toBe('+')
    expect(component.find('._1VRYqJ9s-fRpJ0gCjJNntb').text()).toBe('-')
    expect(component.find('.count img').html().indexOf('https://avatars0.githubusercontent.com/u/583231?v=3')).toBeGreaterThan(-1)
    done()
  })
})
