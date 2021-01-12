<template>
  <div class="header-container">
    <div class="header-box">
      <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
      <div style="margin-left: 10px">dragon7个人博客管理系统</div>
    </div>
    <el-dropdown>
      <div class="header-avator">
        <img src="~assets/img/avator2.jpg" alt="">
        <span>dragon7</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: {
      isCollapse: {
        type: Boolean
      }
    },
    data() {
      return {
        
      }
    },
    created() {},
    mounted() {},
    methods: {
      // 点击退出按钮，推出登录返回登录页面
      logout() {
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      // 菜单折叠与显示
      toggleCallapse() {
        console.log("aaa");
      }
    }
  }
</script>

<style scoped>
  .header-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-box {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header-avator {
    display: flex;
    align-items: center;
  }
  .header-avator img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
  }
</style>