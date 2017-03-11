/* eslint-env jasmine */
import {FETCH_USER_DETAIL_SUCCEEDED} from '../../../app/constants'
import count from '../../../app/reducers/count'
import {fromJS} from 'immutable'

describe('count', () => {
  it(FETCH_USER_DETAIL_SUCCEEDED, () => {
    let state = count(
      fromJS({
        obj: null
      }), {
        type: FETCH_USER_DETAIL_SUCCEEDED,
        payload: {
          avatar_url: 'https://hieunv.com/favicon.ico'
        }
      }
    )
    expect(state.get('obj')['avatar_url']).toBe('https://hieunv.com/favicon.ico')
  })
})
