import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('../pages/home/home').then((module) => {
    resolve(module)
  })
}

const MyInvitation = (resolve) => {
  import('../pages/myInvitation/myInvitation').then((module) => {
    resolve(module)
  })
}

const MyReply = (resolve) => {
  import('../pages/myReply/myReply').then((module) => {
    resolve(module)
  })
}

const ReleaseNew = (resolve) => {
  import('../pages/releaseNew/releaseNew').then((module) => {
    resolve(module)
  }) 
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myInvitation',
      name: '我的发帖',
      iconCls: 'el-icon-mobile-phone',
      index: 1,
      limit: 2,
      meta: {
        keepAlive: true
      },
      component: MyInvitation
    },
    {
      path: '/myReply',
      name: '我的回复',
      iconCls: 'el-icon-document',
      index: 2,
      limit: 2,
      meta: {
        keepAlive: true
      },
      component: MyReply
    },
    {
      path: '/releaseNew',
      name: '发布新贴',
      iconCls: 'el-icon-edit',
      index: 3,
      limit: 3,
      meta: {
        keepAlive: true
      },
      component: ReleaseNew
    }
  ]
})
