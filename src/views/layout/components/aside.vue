<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#333744"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    router
    :collapse="isCollapse"
    :collapse-transition="false">
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-edit"></i>
        <span>博客管理</span>
      </template>
      <el-menu-item index="2-1-1">博文列表</el-menu-item>
      <el-menu-item index="2-1-2">添加博文</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-chat-dot-square"></i>
        <span>评论留言</span>
      </template>
      <el-menu-item index="4-4-1">评论管理</el-menu-item>
      <el-menu-item index="4-4-1">留言管理</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-promotion"></i>
        <span>友情链接</span>
      </template>
      <el-menu-item index="5-4-1">添加友链</el-menu-item>
      <el-menu-item index="5-4-1">友链列表</el-menu-item>
    </el-submenu>
    <el-menu-item index="6">
      <i class="el-icon-setting"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'AppAside',
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
      
    }
  }
</script>

<style scoped>

</style>