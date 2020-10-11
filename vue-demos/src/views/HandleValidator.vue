<template>
  <el-form inline :model="data" :rules="rules" ref="form" status-icon>
    <el-form-item
      label="审批人"
      prop="user"
      :error="error"
      :validate-status="status"
    >
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
      <el-button type="success" @click="showSuccess">切换成功校验</el-button>
      <el-button type="danger" @click="showError">切换失败校验</el-button>
      <el-button type="warning" @click="showValidating">切换校验中</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// html上要绑定rules
//
export default {
  name: 'HandleValidator',
  data() {
    const userValidator = (rule, value, callback) => {
      if (value.length > 3) {
        callback()
      } else {
        callback(new Error('用户名长度必须大于3'))
      }
    }
    return {
      error: '',
      status: '',
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
    showError() {
      this.status = 'error'
      this.error = '用户名输入有误'
    },
    showSuccess() {
      this.status = 'success'
      this.error = ''
    },
    showValidating() {
      this.status = 'validating'
      this.error = ''
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
