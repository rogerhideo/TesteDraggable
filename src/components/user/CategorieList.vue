<template>
      <div>
            <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
                  <p v-for="cat in category" :key="cat"  >
                        <a :href="cat.path" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                              <BaseIcon
                                          class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" 
                                          :d="cat.catIcon"	
                                    />
                                    {{ cat.name }}                 
                        </a>
                  </p>
            </nav>
      </div>
</template>

<script>
      export default {      
            data(){return{
                  category: [
                        { name: 'Drag Inside', 
                              catIcon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
                              path: '/' },
                        { name: 'Drag Two Tables', 
                              catIcon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', 
                              path: '/dragtwotabble' },
                        { name: 'Draggable', 
                              catIcon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', 
                              path: '/dragsimpletabble' },      
                        { name: 'Login', 
                              catIcon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', 
                              path: '/sigin'},       
                        { name: 'Users List', 
                              catIcon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', 
                              path: '/userlist' },
                        { name: 'Create New User', 
                              catIcon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', 
                              path: '/createuser' }                             
                        ]
      }}
}
</script>

<style lang="scss" scoped>

</style>