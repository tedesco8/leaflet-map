<template>
  <div class="home">
    <Maps :tracking="tracking"/>
    <Chart :speed="speed"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Maps from '@/components/Maps.vue'
import Chart from '@/components/Chart.vue'

export default {
  name: 'Home',
  data() 
  {
      return {
          tracking: [],
          speed: []
      }
  },
  components: {
    Maps,
    Chart
  },
  /* eslint-disable no-debugger */
  mounted: function () {
    debugger;
    let me = this;
    let vehicles = 311;
    let datetime_from = "2020-04-20T12:00"
    let datetime_to = "2020-04-20T19:00"

    let header = {'Authorization': 'Bearer fsdfLfsoijIJEIJFPP23OWETsdflazvow3fsf3'};
    let configuracion = { headers: header };

    axios.get(
      `positions?vehicles=${vehicles}&datetime_from=${datetime_from}&datetime_to=${datetime_to}`, 
      configuracion
    )
    .then( r => {
      me.tracking = r.data.tracking[0].data;
    })
    .catch(function(error) {
      console.log(error);
    })
  },
  methods: {
    speedFn: function () {
      debugger;
      let me = this;
      let vehicles = 311;
      let datetime_from = "2020-04-20T12:00"
      let datetime_to = "2020-04-20T19:00"
      let variable_name = "speed"

      let header = {'Authorization': 'Bearer fsdfLfsoijIJEIJFPP23OWETsdflazvow3fsf3'};
      let configuracion = { headers: header };

      axios.get(
        `parameter?vehicles=${vehicles}&datetime_from=${datetime_from}&datetime_to=${datetime_to}&variable_name=${variable_name}`, 
        configuracion
      )
      .then( r => {
        me.speed = r.data.tracking[0].data;
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  },
  created() {
    this.speedFn()
  },
  /* eslint-disable no-debugger */
}
</script>
