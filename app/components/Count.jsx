// @flow
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import {Flex, Box} from 'reflexbox'
import './Count.scss'

class Count extends Component {

  render () {
    const {value, increment, decrement} = this.props
    return (
      <Flex key='2' className='count-component'>
        <Box key='1' col={4} />
        <Box key='2' col={1}>
          <button className='increment' onClick={increment}>+</button>
        </Box>
        <Box key='3' col={2}>
          <div className='count'>{value}</div>
        </Box>
        <Box key='4' col={1}>
          <button className='decrement' onClick={decrement}>-</button>
        </Box>
      </Flex>
    )
  }
}

Count.propTypes = {
  value: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}

export default connect(
  (state) => {
    return {
      value: state.count.get('value')
    }
  },
  (dispatch) => {
    return {
      increment: () => {
        dispatch({type: Actions.INCREMENT})
      },
      decrement: () => {
        dispatch({type: Actions.DECREMENT})
      }
    }
  }
)(Count)
