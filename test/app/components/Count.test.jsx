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
    const buttons = component.find('button')
    expect(buttons.at(0).text()).toBe('+')
    expect(buttons.at(1).text()).toBe('-')
    expect(component.find('img').html().indexOf('https://avatars0.githubusercontent.com/u/583231?v=3')).toBeGreaterThan(-1)
    done()
  })
})
