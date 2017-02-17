/* eslint-env jasmine */
import * as Actions from '../../app/actions'
import count from '../../app/reducers/count'
import {fromJS} from 'immutable'

describe('count', () => {
  it(`${Actions.INCREMENT}`, () => {
    let state = count(
            fromJS({
              value: 3
            }), {
              type: Actions.INCREMENT
            }
        )
    expect(state.get('value')).toBe(4)
  })
  it(`${Actions.DECREMENT}`, () => {
    let state = count(
            fromJS({
              value: 3
            }), {
              type: Actions.DECREMENT
            }
        )
    expect(state.get('value')).toBe(2)
  })
})
