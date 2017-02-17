// noinspection JSUnresolvedVariable
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Count from '../components/Count'

class Index extends Component {
  static propTypes = {

  }
  render () {
    return (
      <Count />
    )
  }
}

export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return {}
  }
)(Index)
