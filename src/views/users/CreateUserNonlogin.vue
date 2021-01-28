<template>
      
<div class="container">
	<h1 class="text-2xl font-semibold text-gray-900">Create User</h1>
<div class="hidden sm:block" aria-hidden="true">
	<div class="py-5">
		<div class="border-t border-gray-200"></div>
	</div>
</div>

<div class="mt-10 sm:mt-0">
	 <div class="md:grid md:grid-cols-3 md:gap-6">
		<div class="md:col-span-1">
			<div class="px-4 sm:px-0">
				<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
				<p class="mt-1 text-sm text-gray-600">
					Use a permanent address where you can receive mail.
				</p>
			</div>
		</div>
		<div class="mt-5 md:mt-0 md:col-span-2">
			<form @submit.prevent="createUser">
				<div class="shadow overflow-hidden sm:rounded-md">
					<div class="px-4 py-5 bg-white sm:p-6">
						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="user_name" class="block text-sm font-medium text-gray-700">User Name</label>

								<input 
									type="text" 
									name="user_name" 
									id="user_name" 
									autocomplete="given-name"
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.userName"	
									:class="{ error: $v.user.userName.$error }"
									@blur="$v.user.userName.$touch()"
								>
								<template v-if="$v.user.userName.$error">
									<p v-if="!$v.user.userName.required" class="errorMessage">
										User Name is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
								<input 
									type="password" 
									name="password" 
									id="password" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.password"	
									:class="{ error: $v.user.password.$error }"
									@blur="$v.user.password.$touch()"
								>
								<template v-if="$v.user.password.$error">
									<p v-if="!$v.user.password.required" class="errorMessage">
										User Name is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
								<input 
									type="email" 
									name="email_address" 
									id="email_address" 
									autocomplete="email" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.email"	
									:class="{ error: $v.user.email.$error }"
									@blur="$v.user.email.$touch()"
								>
								<template v-if="$v.user.email.$error">
									<p v-if="!$v.user.email.required" class="errorMessage">
										Password is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
								<select 
									id="country" 
									name="country" 
									autocomplete="country"
									v-model="user.country"  
									class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									
									:class="{ error: $v.user.country.$error }"
									@blur="$v.user.country.$touch()" 
								>
									<option v-for="country in countries" :key="country">{{ country }}</option>
								</select>
							</div>

							<div class="col-span-6">
								<label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
								<input 
									type="text" 
									name="street_address" 
									id="street_address" 
									autocomplete="street-address" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.streetAddress"	
									:class="{ error: $v.user.streetAddress.$error }"
									@blur="$v.user.streetAddress.$touch()"
								>
								<template v-if="$v.user.streetAddress.$error">
									<p v-if="!$v.user.streetAddress.required" class="errorMessage">
										Street Address is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-6 lg:col-span-2">
								<label for="city" class="block text-sm font-medium text-gray-700">City</label>
								<input 
									type="text" 
									name="city" 
									id="city" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.city"	
									:class="{ error: $v.user.city.$error }"
									@blur="$v.user.city.$touch()"
								>
								<template v-if="$v.user.city.$error">
									<p v-if="!$v.user.city.required" class="errorMessage">
										City is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-3 lg:col-span-2">
								<label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
								<input 
									type="text" 
									name="state" 
									id="state" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.stateP"	
									:class="{ error: $v.user.stateP.$error }"
									@blur="$v.user.stateP.$touch()"
								>
								<template v-if="$v.user.stateP.$error">
									<p v-if="!$v.user.stateP.required" class="errorMessage">
										State / Province is required.
									</p>
								</template>
							</div>

							<div class="col-span-6 sm:col-span-3 lg:col-span-2">
								<label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
								<input 
									type="text" 
									name="postal_code" 
									id="postal_code" 
									autocomplete="postal-code" 
									class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
									v-model="user.postalCode"	
									:class="{ error: $v.user.postalCode.$error }"
									@blur="$v.user.postalCode.$touch()"
								>
								<template v-if="$v.user.postalCode.$error">
									<p v-if="!$v.user.postalCode.required" class="errorMessage">
										Postal Code is required.
									</p>
								</template>
							</div>
						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button 
							type="submit" 
							class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							:disabled="$v.$anyError" 
						>
							Save
						</button>
						<p v-if="$v.$anyError" class="errorMessage">
							Please fill out the required field(s).
						</p>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
</div>			
</template>

<script>
import NProgress from 'nprogress'
import { required } from 'vuelidate/lib/validators'


export default {
  data() {
    return {
      countries: this.$store.state.countries,
      user: this.createFreshUserObject()
    }
  },
  validations: {
    user: {
      userName: { required },
      email: { required },
      password: { required },
      country: { required },
      streetAddress: { required },
	city: { required },
	stateP: { required },
	postalCode: { required }
    }
  },
  methods: {
    createUser() {
	this.$v.$touch()    
	if (!this.$v.$invalid) {    
      NProgress.start()
      this.$store
        .dispatch('user/createUser', this.user)
        .then(() => {
          this.$router.push({
            name: 'sig-in'
          })
          this.user = this.createFreshUserObject()
        })
        .catch(() => {
          NProgress.done()
	  })
	  }
    },
    createFreshUserObject() {
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        userName: '',
        email: '',
        password: '',
        country: '',
        streetAddress: '',
        city: '',
        stateP: '',
        postalCode: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
	border: 1px solid red;
	}
.container {
  box-sizing: border-box;
  width: 750px;
  padding: 0 20px 20px;
  margin: 0 auto;
}

</style>