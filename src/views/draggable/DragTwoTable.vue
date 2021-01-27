<template>
<BaseSideBar mainTitle="Drag Two tables"> 
    <template v-slot:body>
		<div class="container">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="col-4">
						<div class="shadow overflow-hidden border-b border-gray-200 		sm:rounded-lg">
							<h3>First draggable with header</h3>
							<table class="min-w-full divide-y divide-gray-200">
								<thead class="bg-gray-50">
									<tr>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Name
										</th>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Order
										</th>
										<th scope="col" class="relative px-6 py-3">
											Move
										</th>
									</tr>
								</thead>
								


								<draggable 
									id = "first"
									:list="usersNew1" 
									:options="{animation:200, handle:'.my-handle'}" 
									:element="'tbody'" 
									group="a"
									@change="update1"
								>



									<tr v-for="(user, index) in usersNew1" :key="index" class="bg-white">

										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{{ user.userName  }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{{ user.order  }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<i class="fa fa-arrows my-handle">
												<BaseIcon
													d="M4 6h16M4 12h16M4 18h16"	
												/>
											</i>	
										</td>
										
									</tr>

								</draggable>
							</table>
						</div>
					</div>
					<div class="col-4">
						<div class="shadow overflow-hidden border-b border-gray-200 		sm:rounded-lg">
							<h3>Second draggable with header</h3>
							<table class="min-w-full divide-y divide-gray-200">
								<thead class="bg-gray-50">
									<tr>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Name
										</th>
										<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Order
										</th>
										<th scope="col" class="relative px-6 py-3">
											Move
										</th>
									</tr>
								</thead>
								


								<draggable 
									id = "second"
									:list="usersNew2" 
									:options="{animation:200, handle:'.my-handle'}" 
									:element="'tbody'" 
									group="a"
									@change="update2"
								>



									<tr v-for="(user, index) in usersNew2" :key="index" class="bg-white">

										<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{{ user.userName }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{{ user.order }}
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<i class="fa fa-arrows my-handle">
												<BaseIcon
													d="M4 6h16M4 12h16M4 18h16"	
												/>
											</i>	
										</td>
										
									</tr>

								</draggable>
							</table>
						</div>
						<div class="pt-5">
							<div  class="flex justify-end">
								<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button 
										type="submit"
										@click="saveChanges"
										class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save Changes
									</button>
									
								</div>
							</div>
						</div>		
					</div>		
				</div>
			</div>
		</div>
	</template>
</BaseSideBar>
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
    data(){
        return {
            usersNew1: Array,
			usersNew2: Array
        }
    },
    methods: {
        update1(){
           console.log('updatee 1')
         	this.usersNew1.map((user, index) => {
                    user.order = index + 1;
            })
            
        },
        update2(){
           	console.log('updatee 2')
         	this.usersNew2.map((user, index) => {
                    user.order = index + 1;
            })
            
        },
        saveChanges(){
            console.log('save')
            this.$store.dispatch('user/updateAllUsers', this.usersNew1)
            this.$store.dispatch('user/updateAllUsers2', this.usersNew2)
        }
    },
    computed: {   
		 ...mapState('user', ['users', 'users2'])
	},	

	mounted () {
		this.usersNew2 = [...this.users2]
		this.usersNew1 = [...this.users]
		
		console.log('Component mounted.')		
	}
	
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: 550px;
  padding: 0 20px 20px;
  margin: 0 auto;
}
</style>


