import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象
const routes: RouteRecordRaw[] = [
 { path: '/', name: 'Home', component: () => import('@/view/Home/Home.vue') },
 { path: '/work', name: 'Work', component: () => import('@/view/SpaceForWork/WorkSpace.vue') },
 { path: '/entertain', name: 'Entertain', component: () => import('@/view/SpaceForEntertain/EntertainSpace.vue') },
 { path: '/future', name: 'Future', component: () => import('@/view/SpaceForFuture/FutureSpace.vue') },
 { path: '/message', name: 'Message', component: () => import('@/view/SpaceForMsg/MessageSpace.vue') },
 { path: '/tech', name: 'Tech', component: () => import('@/view/SpaceForTech/TechSpace.vue') },
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router