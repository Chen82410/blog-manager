<template>
  <div>
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#ccc"
          active-text-color="#409EFF">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的发帖</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="index" v-for="(item, index) in routes" :key="index">
            <i :class="item.iconCls"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>  
    </el-row>
  </div>
</template>

<script>
import Routes from '../router/index'
export default {
  data() {
    return {
      routes: Routes.options.routes
    }
  },
  mounted() {
    console.log(Routes.options.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .el-menu-vertical-demo
    height calc(100% - 50px) !important
</style>
