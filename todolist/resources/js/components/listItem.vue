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
            <div class="btn-danger ml-3" @click="removeItem()">
               
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>                      
                               
                </div>
        </button>
        <!--<button class="btn-danger ml-3" @click="removeItem()">X</button>-->
    </li>



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
                    }
                })
                .catch(error => {
                    console.log("error from axios delte ", error);
                });
        }
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