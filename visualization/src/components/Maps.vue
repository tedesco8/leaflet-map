<template>
    <v-container fluid>
        <v-layout row mt-2 wrap style="height:450px">
          <v-flex class="purple darken-4" md12>
            <Map :tracking="tracking"/>
          </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable no-debugger */
   import Map from '../components/Map.vue'
    export default {
        name: 'Maps',
        data() {
            return {
            }
        },
        props: {
            tracking: Array
        },
        components: {
            Map
        }
    }
/* eslint-disable no-debugger */
</script>
<style>
    .container {
        z-index: 0;
    }
</style>