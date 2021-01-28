import Vue from "vue";
import VueRouter from "vue-router";
//import DashBoard from '@/views/users/DashBoard.vue';
import UserShow from '@/views/users/UserShow.vue';
import store from '@/store'
import NotFound from '@/views/users/NotFound.vue'
import NetworkIssue from '@/views/users/NetworkIssue.vue'
import UserList from '@/views/users/UserList.vue';
import NProgress from 'nprogress'
import SigIn from '@/views/users/SigIn.vue';
import CreateUser from '@/views/users/CreateUser.vue';
import DragSimpleTabble from '@/views/draggable/DragSimpleTabble.vue';
import DragTwoTable from '@/views/draggable/DragTwoTable.vue';
import DragInsideTable from '@/views/draggable/DragInsideTable.vue';
import CreateUserNonlogin from '@/views/users/CreateUserNonlogin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: DragInsideTable
  },
  {
    path: "/dragtwotabble",
    name: "drag-two-tabble",
    component: DragTwoTable
  },
  {
    path: "/dragsimpletabble",
    name: "drag-simple-tabble",
    component: DragSimpleTabble
  },
  {
    path: '/sigin',
    name: 'sig-in',
    component: SigIn,
  },
  {
    path: '/createusernonlogin',
    name: 'create-user-nonlogin',
    component: CreateUserNonlogin
  },
  //{
  // path: "/dashboard",
  //name: "DashBoard",
  //component: DashBoard
  //},
  {
    path: "/createuser",
    name: "create-user",
    component: CreateUser
  },
  {
    path: '/userlist',
    name: 'user-list',
    component: UserList,
    props: true
  },
  //{
  //  path: '/draggable/simple',
  //  name: 'simple-drag',
  //  component: DragSimpleTabble,
  //},
  {
    path: '/user/:id',
    name: 'user-show',
    component: UserShow,
    props: true, // Set params to props
    beforeEnter(routeTo, routeFrom, next) {
        store
            .dispatch('user/fetchUser', routeTo.params.id)
            .then(user => {
                routeTo.params.user = user // <--- Set the event we retrieved
                next()
            })
            .catch(error => {
                if (error.response && error.response.status == 404) {
                    next({
                        name: '404',
                        params: { resource: 'user' }
                    })
                } else {
                    next({ name: 'network-issue' })
                }
            })
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
},
{
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
},
{
    // Here's the new catch all route
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
}

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router;
