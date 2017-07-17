import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/layouts/Home'
import Post from '@/components/Post'
import Posts from '@/components/Posts'
import Create from '@/components/Create'
import Support from '@/layouts/Support'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    }
  ]
})
