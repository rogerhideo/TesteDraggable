<template>
  <BaseSideBar mainTitle="UserList"> 
    <template v-slot:body>
      
        <transition-group name="slide-fade" tag="ul" appear >
          <UserCard v-for="user in user.users" :key="user.id" :user="user" />
        </transition-group>
       <div class="text-sm">
        <template v-if="page != 1">
          <router-link
            :to="{ name: 'user-list', query: { page: page - 1 } }"
            rel="prev"
            >Prev Page </router-link
          >
          |
        </template>
        <router-link
          v-if="hasNextPage"
          :to="{ name: 'user-list', query: { page: page + 1 } }"
          >Next Page</router-link
        >
      </div>
    </template>
  </BaseSideBar>
</template>

<script>
import UserCard from '@/components/user/UserCard.vue'
import { mapState } from 'vuex'
import store from '@/store'

// Moved the current page & action call outside the component
function getPageUsers(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page || 1)
  store
    .dispatch('user/fetchUsers', {
      page: currentPage
    })
    .then(() => {
      // pass it into the component as a prop, so we can print next pages
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      // current page gets passed in as  a prop
      type: Number,
      required: true
    }
  },
  components: {
    UserCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    // Before we enter the route
    getPageUsers(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    // Before we update the route
    getPageUsers(routeTo, next)
  }, //////////}
  computed: {
    hasNextPage() {
      return this.user.usersTotal > this.page * this.user.perPage
    },
    ...mapState(['user'])
    //...mapState(['event', 'user'])
  }
}
</script>

<style>

</style>
