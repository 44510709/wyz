import Card from './card'
import Demo from './demo'


const components = {
  Card,
  Demo
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install
}


export default API