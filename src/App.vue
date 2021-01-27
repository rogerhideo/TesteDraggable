<template>
    <div id="app">
      
      <NotificationContainer />
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>  
    </div>
</template>

<script>
import NotificationContainer from '@/components/NotificationContainer.vue'
export default {
  components: {
    NotificationContainer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.-text-error {
		color: tomato;
	}
	.error {
	border: 1px solid red;
	}
	
	.errorMessage {
	color: red;
	}
	.button:disabled {
		-webkit-transform: scale(1);
		transform: scale(1);
		box-shadow: none;
		background: #eeeeee;
	}
  


  /***  Transitions  ***/
.fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
