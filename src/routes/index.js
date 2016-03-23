import root from './root'
import home from './home'
import about from './about'

export default {
  ...root,
  indexRoute: home,
  childRoutes: [
    about
  ]
}
