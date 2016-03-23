import About from './components/About'

export default {
  path: 'about',
  getComponent(location, callback) {
    setTimeout(() => {
      callback(null, About)
    }, 500)
  }
}
