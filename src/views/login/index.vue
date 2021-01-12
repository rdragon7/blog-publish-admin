<template>
  <div class="login-container">
    <div class="login-box">
      <h3>个人博客管理系统</h3>
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loginLoading" @click="userLogin">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { login } from '@/api/user'

  export default {
    name: 'LoginIndex',
    data() {
      return {
        loginForm: {
          userName: '',
          password: ''
        },
        loginFormRules: {
          userName: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        },
        loginLoading: false
      }
    },
    created() {},
    mounted() {},
    methods: {
      // 点击重置按钮对表单进行重置操作
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },
      // 点击登录按钮进行用户登录
      userLogin() {
        // 在发起登录请求之前首先对表单进行预校验，校验通过再向服务器发起请求
        this.$refs['loginFormRef'].validate((valid) => {
          if(valid) {
            // 开启loading
            this.loginLoading = true
            login(this.loginForm).then(res => {
              if (res.data.code === 20000) {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                // 关闭loading
                this.loginLoading = false
                // 将token设置到sessionStorage中
                window.sessionStorage.setItem('token',res.data.data.token)
                // 跳转页面
                this.$router.push('/home')
              } else {
                this.$message({
                  message: '登录失败',
                  type: 'error'
                })
                // 关闭loading
                this.loginLoading = false
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-image: url("~assets/img/login_bg.jpg");
  }
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #ffffff;
  }
  .login-box h3 {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
  }
</style>