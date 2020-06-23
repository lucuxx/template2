import loading from './Loading'
import directiveloading from './Loading/directiveLoad'

const install = (Vue) => {
  Object.defineProperty(Vue.prototype, '$loading', {
    get() {
      return loading
    },
  }),
    Vue.directive('loading', directiveloading)
}

export default { install }
