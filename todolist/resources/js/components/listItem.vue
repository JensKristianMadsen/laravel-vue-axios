<template>
    <li class="list-group-item d-flex justify-content-between w-50">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
            class="mr-3"
        />
        <span :class="[item.completed ? 'completed' : '', 'item']">
            {{
                item.name
            }}
            {{
                item.date
            }}
        </span>


        <button>  
           <!-- <div class="btn-danger ml-3" @click="()=>{removeItem(); deleteSuccessMessage()}">-->
                <div class="btn-danger ml-3" @click="removeItem">
               
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>                      
                               
                </div>
        </button>
        <!--<button class="btn-danger ml-3" @click="removeItem()">X</button>-->
    </li>


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
                  <p class="text-gray-600 text-sm">{{item.name}}{{item.date}}</p>

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
    props: ["item"],
    methods: {
        updateCheck() {
            axios
                .put(`api/item/${this.item.id}`, {
                    item: this.item
                })
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios put", errors);
                });
        },
        removeItem() {
            axios
                .delete(`api/item/${this.item.id}`)
                .then(res => {
                    if (res.status == 200) {
                        this.$emit("itemchanged");
                        this.deleteSuccessMessage();
                    }
                })
                .catch(error => {
                    console.log("error from axios delte ", error);
                });
        },
            deleteSuccessMessage() {
      this.$notify(
        {
          group: "top",
          title: "Success",
          text: "Your tank has been deleted!"
        },
        4000
      );
    },
    }
};
</script>

<style>
.completed {
    text-decoration: line-through;
    color: gray;

}
.item {
    word-break: break-all;
}
</style>