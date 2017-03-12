import {FETCH_USER_DETAIL_SUCCEEDED} from '../constants'

export default function (state = {obj: null}, action) {
  switch (action.type) {
    case FETCH_USER_DETAIL_SUCCEEDED:
      return Object.assign(state, {obj: action.payload})
    default:
      return state
  }
}
