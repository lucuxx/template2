<template>
  <div class="about">
    <h1>在这里添加更多内容吧！</h1>
    <input type="button" @click="btn" value="click" />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    btn() {
      const loading = this.$loading()

      setTimeout(function() {
        loading.close()
      }, 2000)
    },
  },
}
</script>
