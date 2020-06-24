import loading from './Loading'
import directiveloading from './Loading/directiveLoad'
import autofocus from './autofocus'

const install = (Vue) => {
  Object.defineProperty(Vue.prototype, '$loading', {
    get() {
      return loading
    },
  }),
    Vue.directive('loading', directiveloading)
    Vue.directive('autofocus', autofocus)
}

export default { install }
