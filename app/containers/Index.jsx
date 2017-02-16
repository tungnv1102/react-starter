import React from "react";
import {connect} from "react-redux";
import Count from "../components/Count";
const {Component, PropTypes} = React;

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Count />
    );
  }
}

Index.propTypes = {
};
export default connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {};
  }
)(Index);