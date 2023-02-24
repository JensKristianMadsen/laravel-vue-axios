require('./bootstrap');
require('popper.js');

import { createApp } from 'vue'
import App from './components/app.vue';

export const eventBus = createApp(App)

createApp(App).mount('#app')
