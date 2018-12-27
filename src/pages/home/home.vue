<template>
  <div class="home-root">
    <el-row class="el-common">
      <el-col :span="4" class="col-common">
        <div class="col-common-div">
          <i class="el-icon-menu"></i>
          <span>个人管理中心</span>
        </div>
        <routes></routes>
      </el-col>
      <el-col :span="20" class="">        
        <el-tabs v-model="editableTabsValue2" type="border-card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            <my-table></my-table>
          </el-tab-pane>
        </el-tabs>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Routes from '../../common/routes'
import MyTable from '../../components/table'
export default {
  data() {
    return {
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2,
      currentPage4: 4,      
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  },
  components: {
    Routes,
    MyTable
  }
}
</script>

<style lang="stylus" scoped>
  .home-root
    width 100%
    height 100%
    color #ccc
    .el-common
      height 100%
      .col-common
        height 100%
        line-height 40px
        border-right 1px solid #e6e6e6
        .col-common-div
          box-sizing border-box
          padding 0 20px
    .block
      position fixed
      bottom 0
      right 20px
</style>

<style lang="stylus">
.col-common
  .el-menu
    border-right none !important
</style>

