<template>
<BaseSideBar mainTitle="Drag Inside"> 
    <template v-slot:body>
      <div class= "container">
        <div class="justify-content-between row">
          <nested-test class="col-8" v-model="elements" />
        </div>
      </div>  
    </template>
  </BaseSidebar>    
</template>

<script>
import NestedTest from "@/components/draggable/nested-test.vue";

export default {
  components: {
    NestedTest
  },
  data(){
        return {
            elementsNew: Array
        }
  },
  methods : {},
  computed: {
    elements: {
      get() {
        return this.$store.state.element.elements
      },
      set(value) {
        this.$store.dispatch("element/updateElements", value);
      }
    }
  },

};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: 550px;
  padding: 0 20px 20px;
  margin: 0 auto;
}
</style>
