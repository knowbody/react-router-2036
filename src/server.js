require('babel-register')

const React            = require('react')
const ReactDOMServer   = require('react-dom/server')
const express          = require('express')
const fs               = require('fs')
const routes           = require('./routes').default
const ReactRouter      = require('react-router')
const RouterContext    = ReactRouter.RouterContext
const match            = ReactRouter.match
const server           = express()
const tmpl             = fs.readFileSync(__dirname + '/index.html', 'utf8')

// EXPRESS SERVER
server.use('/dist', express.static(__dirname + '/../dist'))

server.get('*', (req, res) => {
  const location = req.url
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.sendStatus(500)
    }
    else if (renderProps === undefined) {
      res.sendStatus(404)
    }
    else {
      const root   = React.createElement(RouterContext, renderProps)
      const html   = ReactDOMServer.renderToString(root)
      const output = tmpl.replace('%%INITIAL_HTML%%', html)
      res.send(output)
    }
  })
})

server.listen(3000, () => {
  console.log('Express server listening at http://localhost:3000/')
})
