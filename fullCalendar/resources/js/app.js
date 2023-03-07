/*
require('./bootstrap');
*/

require('./bootstrap');
require('popper.js');




import { createApp } from 'vue'
import Notifications from 'vue3-vt-notifications';
import App from './components/app.vue';


export const eventBus = createApp(App)

createApp(App).use(Notifications).mount('#app')
