<template>
    <div>
       <FullCalendar :options="calendarOptions"  />     
    </div>
</template>
<script>

//import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar : FullCalendar // make the <FullCalendar> tag available
  },
 data() {
    return {
      calendarOptions:{
        plugins: [ dayGridPlugin,  interactionPlugin, ],
        initialView: 'dayGridMonth',
        
        events: [
          { title: 'event 1', date: '2023-03-11' },
          { title: 'event 2', date: '2023-03-12' }
        ]
      }
    }
  }}
</script>
