## 表单校验
[官网FORM](https://element.eleme.cn/#/zh-CN/component/form)
### 绑定rules
```html
<el-form inline :model="data" :rules="rules">
```

### 设置prop
```html
<el-form-item label="审批人" prop="user">
```

### data里面设置rules
```js
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
```
### 提交时验证(可选)
#### el-form设置ref，然后调用
```html
<el-form inline :model="data" :rules="rules" ref="form">
```
#### 在提交时调用方法
```js
onSubmit() {
  this.$message('提交')
  this.$refs.form.validate((isValid, errors) => {
    console.log(isValid, errors)
  })
  console.log(this.data)
},
```
isValid 返回true | false，校验是否通过
errors 返回一个数组，里面包含错误信息

## 动态添加校验
构建一个新的rules，要生成一个新的对象
```js
addRule() {
  const userValidator = (rule, value, callback) => {
    if (value.length > 3) {
      this.inputError = ''
      this.inputValidateStatus = ''
      callback()
    } else {
      callback(new Error('用户名长度必须大于3'))
    }
  }
  const newRule = [
    ...this.rules.user,
    { validator: userValidator, trigger: 'change' },
  ]
  this.rules = Object.assign({}, this.rules, { user: newRule })
},
```
**tips: validate-on-rule-change	是否在 rules 属性改变后立即触发一次验证**

## 手动控制校验
>validate-status：验证状态，枚举值，共四种：
>success：验证成功
>error：验证失败
>validating：验证中
>(空)：未验证
>error：自定义错误提示
### 设置 el-form-item 属性
```html
<el-form-item
  label="用户名"
  prop="user"
  :error="error"
  :validate-status="status"
>
<!-- ... -->
</el-form-item>
```
### 自定义 status 和 error
```js
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
}
```

