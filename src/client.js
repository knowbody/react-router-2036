import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { Router, match, browserHistory as history } from 'react-router'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

match({ routes, location }, () => {
  const root = React.createElement(Router, { routes, history })
  render(root, document.getElementById('root'))
})
