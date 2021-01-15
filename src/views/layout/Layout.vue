<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <app-aside :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppAside from './components/aside'
  import AppHeader from './components/header'

  export default {
    name: 'Layout',
    components: {
      AppAside,
      AppHeader
    },
    data() {
      return {
        isCollapse: false
      }
    },
    created() {},
    mounted() {},
    methods: {}
  }
</script>

<style scoped>
  .layout-container {
    height: 100%;
  } 
  .el-aside {
    background-color: #333744;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    background-color: #F1F3F5;
  }
</style>