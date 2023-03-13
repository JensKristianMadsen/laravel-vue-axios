<template>

    <!--Navbar-->
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <div class="container-fluid">
              <a class="text-xl text-black font-semibold" href="#">Navbar</a> 
          </div>
      </div>
  </nav>
  <!--Navbar-->
  <div class="container w-100 m-auto text-center mt-3">
      <h1 class="text-danger">Laravel vue todo list</h1>
<!--AddItemForm-->
      <add-item-form v-on:reloadlist="getItems()" />
<!--AddItemForm-->

<!--ListView-->
      <list-view
          :items="items"
          v-on:reloadlist="getItems()"
      />
<!--ListView-->      


  </div>
  <div>


  <full-calendar />
</div>




</template>

<script>
import addItemForm from "./addItemForm";
import listView from "./listView";
import FullCalendar from "./FullCalendarComponent.vue";






export default {
  components: {
      addItemForm,
      listView,
      FullCalendar : FullCalendar,


     
  },

  data: function() {
      return {
          items: [],
     

      
      }
  },
  methods: {
      getItems() {
          axios
              .get("api/items")
              .then(res => {
                  this.items = res.data;
              })
              .catch(error => {
                  console.log(error);
              });
      },


  },
  created() {
      this.getItems();
  },
};
</script>

<style scoped>
</style>