<template>
  <el-form inline :model="data" :rules="rules" ref="form">
    <el-form-item label="审批人" prop="user">
      <el-input v-model="data.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="data.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// html上要绑定rules
//
export default {
  name: 'Home',
  data() {
    const userValidator = (rule, value, callback) => {
      if (value.length > 3) {
        callback()
      } else {
        callback(new Error('用户名长度必须大于3'))
      }
    }
    return {
      data: {
        user: 'kuma',
        region: '区域二',
      },
      rules: {
        user: [
          { required: true, trigger: 'change', message: '用户名必须录入' },
          { validator: userValidator, trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$message('提交')
      this.$refs.form.validate((isValid, errors) => {
        console.log(isValid, errors)
      })
      console.log(this.data)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
