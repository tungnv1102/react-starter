import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as Actions from "../actions";
import "./Count.scss";

class Count extends Component {

    render() {
        const {hieunv, value, increment, decrement} = this.props;
        return (
            <div className="row count-component">
                <div className="col-md-12">
                    <img src={(hieunv && hieunv.get("avatar_url")) ? hieunv.get("avatar_url") : "" } alt=""/>
                </div>
                <button className="col-md-1 col-md-offset-4 increment" onClick={increment}>+</button>
                <div className="col-md-2 count">{value}</div>
                <button className="col-md-1 decrement" onClick={decrement}>-</button>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

Count.propTypes = {
    value: PropTypes.number,
    hieunv: PropTypes.object,
    increment: PropTypes.func,
    decrement: PropTypes.func,
};

export default connect(
    (state) => {
        return {
            value: state.count.get("value"),
            hieunv: state.count.get("hieunv"),
        };
    },
    (dispatch) => {
        return {
            increment: () => {
                dispatch(Actions.INCREMENT_ACTION);
            },
            decrement: () => {
                dispatch(Actions.DECREMENT_ACTION);
            },
        };
    }
)(Count);
