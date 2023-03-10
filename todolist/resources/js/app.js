/*require('./bootstrap');
require('popper.js');



import { Calendar } from '@fullcalendar/core';
window.Calendar = Calendar;
import interaction from '@fullcalendar/interaction';
window.interaction = interaction;
import dayGridPlugin from '@fullcalendar/daygrid';
window.dayGridPlugin = dayGridPlugin;

import listPlugin from '@fullcalendar/list';
window.listPlugin = listPlugin;
//

import { createApp } from 'vue'
import Notifications from 'vue3-vt-notifications';
import App from './components/app.vue';
import FullCalendarComponent from './components/FullCalendarComponent.vue';




//export const eventBus = createApp(App)

createApp(App).use(Notifications).mount('#app')
*/

/****** */
require('./bootstrap');
require('popper.js');


import { createApp } from 'vue';
import App from './components/app.vue';
import FullCalendarComponent from './components/FullCalendarComponent.vue';
import Notifications from 'vue3-vt-notifications';


const app = createApp(App);


app.use(Notifications).mount('#app');
