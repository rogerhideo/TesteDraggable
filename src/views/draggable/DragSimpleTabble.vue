<template>
<BaseSideBar mainTitle="Simple Drag"> 
    <template v-slot:body>
		<div class="flex flex-col">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Name
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Email
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Index
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Order
									</th>
									<th scope="col" class="relative px-6 py-3">
										Move
									</th>
								</tr>
							</thead>
							


							<draggable :list="usersNew" :options="{animation:200, handle:'.my-handle'}" :element="'tbody'" @change="update">



								<tr v-for="(user, index) in usersNew" :key="index" class="bg-white">

									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{{ user.userName }}
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{{ user.email }}
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{{ index }}
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
            usersNew: Array
        }
    },

    methods: {
        update() {
           console.log('updatee')
           this.usersNew.map((user, index) => {
                    user.order = index + 1;
            })            
		},
		saveChanges() {
           console.log('save')
           this.$store.dispatch('user/updateAllUsers', this.usersNew)
        },
		testeDelete(){
			this.$store.dispatch('user/deleteAllUsers')

		}    
    },
	computed: {   	
		...mapState('user', ['users'])
	},	
	mounted () {
		//this.$store.dispatch('user/fetchAllUsers')
		this.usersNew = [...this.users]
		console.log('Component mounted.')		
	}
}
</script>

<style>
</style>
