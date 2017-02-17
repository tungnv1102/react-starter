// import React, {Component, PropTypes} from 'react'
import 'babel-polyfill'

let div = document.createElement('div')
div.setAttribute('id', 'root')
document.body.appendChild(div)

let context = require.context('.', true, /\.test\./)
context.keys().forEach(context)

let appContext = require.context('../app', true, /\.(js|jsx)$/)

appContext.keys().forEach(appContext)
