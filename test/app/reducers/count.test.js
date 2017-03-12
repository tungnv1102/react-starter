/* eslint-env jasmine */
import {FETCH_USER_DETAIL_SUCCEEDED} from '../../../app/constants'
import count from '../../../app/reducers/count'

describe('count', () => {
  it(FETCH_USER_DETAIL_SUCCEEDED, () => {
    let state = count({
        obj: null
      }, {
        type: FETCH_USER_DETAIL_SUCCEEDED,
        payload: {
          avatar_url: 'https://hieunv.com/favicon.ico'
        }
      }
    )
    expect(state.obj['avatar_url']).toBe('https://hieunv.com/favicon.ico')
  })
})
