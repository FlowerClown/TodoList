import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/add/test'
import Addlist from '@/components/add/addlist'
import TodoList from '@/components/todolist/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'TodoList',
      component:TodoList
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children:[
        {
          path: 'addlist',
          name: 'Addlist',
          component: Addlist
        }
      ]
    },
    
  ]
})
