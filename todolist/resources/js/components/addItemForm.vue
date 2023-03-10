<template>

  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-4 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-white">Personal Information</h3>
          <p class="mt-1 text-sm text-white">Use a permanent address where you can receive mail.</p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form >
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-4 gap-4">
          
                <div class="col-span-1 sm:col-span-1 lg:col-span-1">
                  <label for="city" class="block text-sm font-medium text-gray-700">Task</label>
                  <input type="text" v-model="item.name" name="item" id="item" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" role="alert" required>
                </div>


  
                <div class="col-span-1 sm:col-span-1 lg:col-span-1">
                  <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                  <input datepicker :format="customDate" v-model="item.date"  type="date" autocomplete="address-level1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
                </div>


                 <div  class="col-span-1 sm:col-span-1  lg:col-span-1">
                  <label for="repeated" class="block text-sm font-medium text-gray-700">Repeated</label>
                  <input  type="checkbox"  v-model="repeated" name="repeated" autocomplete="address-level1" class="mt-1 block w-full  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </div>
  
                <div v-show="repeated" class="col-span-1 sm:col-span-1 lg:col-span-1">
                  <label for="country" class="block text-sm font-medium text-gray-700">Select - repeated</label>
                  <select v-model="category" id="category" name="category" autocomplete="category-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option v-for="category in categorys" :key="category.id" :value="category.id">{{category.name}}</option>
                 <h1>dsjkhdskhdhsdshjhjdshjsd</h1>
                  </select> 
                </div>
              </div>


            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button :class="[item.name ? 'active' : 'notactive']"

              @click="addItem"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  <notificationGroup group="top">
  <div class="fixed inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-end">
      <div class="max-w-sm w-full">
        <notification v-slot="{notifications}">
          <div
            class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="flex justify-center items-center w-12 bg-green-500">
              <svg
                class="h-6 w-6 fill-current text-white"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                ></path>
              </svg>
            </div>

            <div class="-mx-3 py-2 px-4">
              <div class="mx-3">
                <span class="text-green-500 font-semibold">{{notification.title}}</span>
                <p class="text-gray-600 text-sm">{{notification.text}}</p>
              </div>
            </div>
          </div>
        </notification>
      </div>
    </div>
  </notificationGroup>


  
  </template>


<script>



export default {
  
name: "App",

emits: ["reloadlist"],

  data: function() {
      return {


        categorys: [],
        category: '',

        repeated: false,
  
          item: {
          
              name: '',
              date:'',
             
          }
      };
  },
  mounted() {
            this.getCategorys()
            },

  
  methods: {
      addItem() {
          if (this.item.name == "" && this.item.date == "") {
              return;
          }
          axios
              .post("api/item/store", {
                  item: this.item
              })
              .then(res => {
                  if (res.status == 201) {
                      this.item.name = "";
                      this.$emit("reloadlist");
                      this.addSuccessMessage();
                     
                  }
                  
              })
              .catch(error => {
                  console.log(error);
              });
      
      }
      ,
      customDate(data){
         // this.date = moment(data).format('YYYY-MM-DD')
          this.date = moment(data).format('DD-MM-YYYY')
      },


      getCategorys() {
          axios
              .get("api/categorys")
              .then(res => {
                  this.categorys = res.data;
              })
              .catch(error => {
                  console.log(error);
              });
      },
      methodToRunOnSelect(payload) {
            this.object = payload;
          } ,






      addSuccessMessage() {
    this.$notify(
      {
        group: "top",
        title: "Success",
        text: "Your task was registered!"
      },
      4000
    );
  },
  }
};
</script>

<style scoped>
.active {
  color: white;
  background-color: blue;
}
.inactive {
  color: gray;
}

#app {
font-family: "Avenir", Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
</style>