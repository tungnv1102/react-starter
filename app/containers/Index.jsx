import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

class Index extends Component {

    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }
}

Index.propTypes = {
    children: PropTypes.element.isRequired,
};
export default Index;

// export default connect(
//     (state) => {
//         return {};
//     },
//     (dispatch) => {
//         return {};
//     }
// )(Index);
