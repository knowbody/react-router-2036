import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { Router, match, browserHistory as history } from 'react-router'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

match({ history, routes }, (error, location, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById('root'))
})
