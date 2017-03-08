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
    return <div className={countStyles['count-component']}>
      <button className={countStyles['btn-primary']} onClick={increment}>+</button>
      <div className='count'>{obj && obj['avatar_url'] && <img src={obj['avatar_url']} />}</div>
      <button className={countStyles['btn-danger']} onClick={decrement}>-</button>
    </div>
  }
}

export default connect(
  (state) => {
    return {
      obj: state.count.get('obj')
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
