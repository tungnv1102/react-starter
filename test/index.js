import React, {Component, PropTypes} from "react";
import "babel-polyfill";

var div = document.createElement("div");
div.setAttribute("id", "root");
document.body.appendChild(div);

var context = require.context(".", true, /\.test\./);
context.keys().forEach(context);

var appContext = require.context("../app", true, /\.(js|jsx)$/);

appContext.keys().forEach(appContext);