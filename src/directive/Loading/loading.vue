<template>
  <transition name="fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <br />
        <span class="custom-loading-text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: '',
      text: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.custom-loading-mask {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-loading-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .custom-loading-text {
    color: #fff;
  }
}
.loading {
  width: 50px;
  height: 40px;
  text-align: center;
}
.loading span {
  width: 5px;
  height: 100%;
  margin-left: 5px;
  display: inline-block;
  background: #09f3e7;
  animation: mymove 1.2s infinite ease-in-out;
  -webkit-animation: mymove 1.2s infinite ease-in-out;
  /*  
                mymove代表动画名字
                1.2s代表执行时间
                infinite表示一直循环执行
                ease-in-out表示先慢后快的缓动
            */
}
.loading > span:nth-child(2) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.loading > span:nth-child(3) {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.loading > span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.loading > span:nth-child(5) {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
@keyframes mymove {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
