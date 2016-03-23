import React from 'react'
import { Link } from 'react-router'

export default (props, context) => {
  return (
    <div>
      <h1>Root</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div>
        { props.children }
      </div>
    </div>
  )
}
