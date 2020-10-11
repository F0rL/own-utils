<template>
  <div class="home">
    <el-button @click="handleMessage">点击message</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    handleMessage() {
      this.$message('弹窗')
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 20px;
  ::v-deep .el-button {
    color: red;
  }
}
</style>
