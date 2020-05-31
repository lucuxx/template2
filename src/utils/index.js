export default {
  install(Vue, options) {
    Vue.prototype.$util = {
      method1(val) {
        console.log(val)
      },
    }
  },
}
