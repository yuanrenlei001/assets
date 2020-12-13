import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import keyword from '@/components/keyword'
import Index from '@/components/index'
import assets from '@/components/assets/index'
import information from '@/components/information/index'
import maps from '@/components/map/index'
import property from '@/components/property/index'
import purview from '@/components/purview/index'
import user from '@/components/user/index'
import log from '@/components/log/index'
import authority from '@/components/authority/index'
import news from '@/components/news'
import approval from '@/components/approval/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: login , meta: {title: '登录'}},
    {path: '/keyword', name: 'keyword', component: keyword , meta: {title: '修改密码'}},
    {path: '/Index', name: 'Index', component: Index , meta: {title: '国有资质管理'},
        children:[
            {path: '/assets', name: 'assets', component: assets , meta: {title: '国有资质管理'}},
            {path: '/information', name: 'information', component: information , meta: {title: '国有资质管理'}},
            {path: '/maps', name: 'maps', component: maps , meta: {title: '国有资质管理'}},
            {path: '/property', name: 'property', component: property , meta: {title: '国有资质管理'}},
            {path: '/approval', name: 'approval', component: approval , meta: {title: '审批流程管理'}},
            {path: '/purview', name: 'purview', component: purview , meta: {title: '用户管理'}},
            {path: '/user', name: 'user', component: user , meta: {title: '角色管理'}},
            {path: '/authority', name: 'authority', component: authority , meta: {title: '权限管理'}},
            {path: '/log', name: 'log', component: log , meta: {title: '日志管理'}},
            {path: '/news', name: 'news', component: news , meta: {title: '消息列表'}},
        ]
    },

  ]
})
