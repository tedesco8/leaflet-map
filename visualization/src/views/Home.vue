<template>
  <div class="home">
    <Maps :tracking="tracking"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Maps from '@/components/Maps.vue'

export default {
  name: 'Home',
  data() 
  {
      return {
          tracking: []
      }
  },
  components: {
    Maps
  },
  /* eslint-disable no-debugger */
  mounted: function () {
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
      me.tracking = r.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  /* eslint-disable no-debugger */
}
</script>
