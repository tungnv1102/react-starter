/* eslint-env jasmine */
import mockStore from 'redux-mock-store'
import {FETCH_USER_DETAIL} from '../../../app/constants'
describe('[ACTIONS]', () => {
  describe(FETCH_USER_DETAIL, () => {
    it(FETCH_USER_DETAIL, () => {
      let store = mockStore()()

      store.dispatch({type: FETCH_USER_DETAIL})
      expect(store.getActions()[0].type).toBe(FETCH_USER_DETAIL)
    })
  })
})
