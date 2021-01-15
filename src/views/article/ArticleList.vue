<template>
  <div class="articlelist-container">
    <!-- 条件搜索区域 -->
    <el-card class="box-card1">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>博文列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
      <el-form label-width="80px" size="mini">        
        <el-form-item label="文章标题">
          <el-col :span="10">
            <el-input placeholder="请输入您要搜索的文章" v-model="articleQuery.articleTitle"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="articleQuery.channelId" placeholder="请选择分类">
            <el-option
              label="全部"
              :value="null">
            </el-option>
            <el-option 
              v-for="(item,index) in channels"
              :key="index"
              :label="item.atypeName" 
              :value="item.atypeId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="时间">
              <el-date-picker
                v-model="articleQuery.beginTime"
                type="datetime"
                placeholder="选择开始时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                default-time="00:00:00"
              />
            </el-form-item>
          </el-col> 
          <el-col :span="6">
            <el-form-item>
              <el-date-picker
                v-model="articleQuery.endTime"
                type="datetime"
                placeholder="选择截止时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                default-time="00:00:00"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="loadArticle" :disabled="loading">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card2">
      <span>根据筛选条件共查询到{{total}}条结果：</span>
      <el-divider></el-divider>
      <el-table
        :data="articleList"
        style="width: 100%"
        size="mini"
        v-loading="loading">
        <el-table-column
          prop="articlePicture"
          label="封面"
          width="180">
          <template v-slot="scope">
            <el-image
              style="width: 60px; height: 60px"
              :src="scope.row.articlePicture"
              fit="cover">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="articleTitle"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="articleStatus"
          label="状态">
          <template v-slot="scope">
            <el-tag v-if="scope.row.articleStatus === true " type="success">已发布</el-tag>
            <el-tag v-else type="danger">未发布</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="发布时间"
          width="300px">
        </el-table-column>
        <el-table-column
          label="操作">
          <template v-slot="scope">
            <el-tooltip effect="dark" content="修改" placement="top" :enterable="false">
              <el-button type="primary" circle icon="el-icon-edit" size="mini"></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top" :enterable="false">
              <el-button type="danger" circle icon="el-icon-delete" size="mini" @click="deleteArticle(scope.row.articleId)"></el-button>
            </el-tooltip>            
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        class="article-page"
        :disabled="loading">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
  import { getArticleList,getChannel } from '@/api/article'

  export default {
    name: 'ArticleList',
    data() {
      return {
        page: 1, // 当前页
        size: 10, // 每页显示条数
        total: 0,  // 文章总数
        articleQuery: {
          
        }, // 查询文章列表条件对象
        articleList: [], // 保存从服务器获取到的文章的集合
        channels: {}, // 文章分类
        rangeDate: [], // 日期范围
        loading: true
      }
    },
    created() {
      this.loadChannels()
      this.loadArticle()
    },
    mounted() {},
    methods: {
      // 获取文章分类
      loadChannels() {
        getChannel().then(res => {
          this.channels = res.data.data.list
        })
      },
      // 获取文章列表
      loadArticle() {
        // 开启loading
        this.loading = true
        getArticleList(this.page,this.size,this.articleQuery).then(res => {
          if(res.data.code !== 20000) {
            this.$message({
              message: '获取文章列表失败',
              type: 'error'
            })
          }
          this.articleList = res.data.data.rows
          this.total = res.data.data.total
          //关闭loading
          this.loading = false
        })
      },
      // 监听pageSize改变的事件
      handleSizeChange(newSize) {
        this.size = newSize
        this.loadArticle()
      },
      // 监听页码发生改变的事件
      handleCurrentChange(newCurrent) {
        this.page = newCurrent
        this.loadArticle()
      }
    }
  }
</script>

<style scoped>
  .box-card2 {
    margin-top: 15px;
  }
  .article-page {
     margin-top: 20px;
  }
  .article-picture {
    width: 100px;
    background-size: cover;
  }
</style>