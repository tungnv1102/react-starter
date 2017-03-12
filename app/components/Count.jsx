import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {FETCH_USER_DETAIL} from '../constants'
import countStyles from './Count.scss'

class Count extends Component {
  static propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  }

  render () {
    const {obj, increment, decrement} = this.props
    const url = obj && obj['avatar_url'];
    return <div className={countStyles['count-component']}>
      <button className={countStyles['btn-primary']} onClick={increment}>+</button>
      {url && <img src={url} />}
      <button className={countStyles['btn-danger']} onClick={decrement}>-</button>
    </div>
  }
}

export default connect(
  (state) => {
    return {
      obj: state.count && state.count.obj
    }
  },
  (dispatch) => {
    return {
      increment: () => {
        dispatch({type: FETCH_USER_DETAIL})
      }
    }
  }
)(Count)
