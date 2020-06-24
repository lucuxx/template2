// 防抖函数
export function debounce(fn, delay = 300) {   //默认300毫秒
    let timer;
    return function () {
      let args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);   // this 指向vue
      }, delay);
    };
  }

// 节流函数
export function throttle(fn, time = 300) {
      let _arguments = arguments
      let canRun = true 
      return function () {
          if (!canRun) return
          canRun = false
          setTimeout(() => {
              fn.call(this, _arguments)
              canRun = true
          }, time);
      }
  }
