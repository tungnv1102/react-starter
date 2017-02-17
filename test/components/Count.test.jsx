/* eslint-env jasmine */
import * as React from 'react'
import {mount} from 'enzyme'
import Count from '../../app/components/Count'
import promiseMiddleware from 'redux-promise-middleware'
import REDUX_THUNK from 'redux-thunk'
import mockStore from 'redux-mock-store'
import {fromJS} from 'immutable'
const {Provider} = require('react-redux')
const REDUX_PROMISE = promiseMiddleware()
import * as Actions from '../../app/actions'

describe('[COMPONENTS]', () => {
  it('Count.jsx', (done) => {
    let store = mockStore([REDUX_THUNK, REDUX_PROMISE])({
      count: fromJS({
        value: 10
      })
    })

    const component = mount(<Provider store={store}><Count /></Provider>)
    expect(component.find('.increment').text()).toBe('+')
    expect(component.find('.decrement').text()).toBe('-')
    expect(component.find('.count').text()).toBe('10')
    done()
  })

  it('Count.jsx', (done) => {
    let store = mockStore([REDUX_THUNK, REDUX_PROMISE])({
      count: fromJS({
        value: 10
      })
    })

    const component = mount(<Provider store={store}><Count /></Provider>)
    component.find('.increment').simulate('click')
    setTimeout(() => {
      expect(store.getActions().length).toBe(1)
      expect(store.getActions()[0].type).toBe(Actions.INCREMENT)
      done()
    }, 1000)
  })
  it('Count.jsx', (done) => {
    let store = mockStore([REDUX_THUNK, REDUX_PROMISE])({
      count: fromJS({
        hieunv: {
          avatar_url: 'https://avatars1.githubusercontent.com/u/12537812?v=3&s=466'
        },
        value: 10
      })
    })

    const component = mount(<Provider store={store}><Count /></Provider>)
    component.find('.decrement').simulate('click')
    setTimeout(() => {
      expect(store.getActions().length).toBe(1)
      expect(store.getActions()[0].type).toBe(Actions.DECREMENT)
      done()
    }, 1000)
  })
})
