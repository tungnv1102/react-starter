// noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {FETCH_USER_DETAIL} from '../constants'
import './Count.scss'

class Count extends Component {
  static propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func
  }

  render () {
    const {obj, increment, decrement} = this.props
    return <div className='count-component'>
      <button className='increment' onClick={increment}>+</button>
      <div className='count'>{obj && obj['avatar_url'] && <img src={obj['avatar_url']} />}</div>
      <button className='decrement' onClick={decrement}>-</button>
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
      // decrement: () => {
      //   dispatch({type: Actions.})
      // }
    }
  }
)(Count)
