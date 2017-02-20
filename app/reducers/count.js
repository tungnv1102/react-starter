import {FETCH_USER_DETAIL_SUCCEEDED} from '../constants'
import {fromJS} from 'immutable'

export default function (state = fromJS({obj: null}), action) {
  switch (action.type) {
    case FETCH_USER_DETAIL_SUCCEEDED:
      return state.update('obj', (v) => action.payload)
    default:
      return state
  }
}
