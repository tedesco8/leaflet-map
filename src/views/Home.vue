<template>
  <div class="home">
    <Maps :arr="lugares"/>
    <!-- <Chart :speed="speed"/> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import Maps from '@/components/Maps.vue'
// import Chart from '@/components/Chart.vue'

export default {
  name: 'Home',
  data() 
  {
      return {
          arr: [],
          speed: []
      }
  },
  components: {
    Maps,
    // Chart
  },
  /* eslint-disable no-debugger */
  computed: {
    ...mapState("lugaresNamespace", ["lugares"]),
  }
  /* eslint-disable no-debugger */
}
</script>
