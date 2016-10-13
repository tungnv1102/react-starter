import * as React from "react";
import {IndexRoute, Route} from "react-router";
import Index from "./containers/Index";
import Count from "./components/Count";

export default (
    <Route path={"/"} component={Index}>
        <IndexRoute component={Count}/>
    </Route>
);