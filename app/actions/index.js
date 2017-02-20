import {call, put, takeLatest} from 'redux-saga/effects'
import {FETCH_USER_DETAIL, FETCH_USER_DETAIL_SUCCEEDED, FETCH_USER_DETAIL_FAILED} from '../constants'
import Axios from 'axios'

export default function* () {
  yield takeLatest(FETCH_USER_DETAIL, function* g () {
    try {
      const response = yield call(Axios.get, 'https://api.github.com/users/octocat')
      yield put({type: FETCH_USER_DETAIL_SUCCEEDED, payload: response.data})
    } catch (e) {
      yield put({type: FETCH_USER_DETAIL_FAILED, payload: e})
    }
  })
}
