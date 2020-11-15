<template>
    <highcharts :options="chartOptions"></highcharts>
</template>
<script>
 /* eslint-disable no-debugger */
import {Chart} from 'highcharts-vue'

export default {
    name: 'chart',
    data() {
        return {
            title: 'Gráfico del parámetro speed',
            modo: 'spline',
            series: [{
                data: this.speed
            }]
        }
    },
    components: {
        highcharts: Chart 
    },
    props: {
        speed: Array
    },
    computed: {
        chartOptions() {
            return {
                chart: {  type: this.modo},
                title: {  text: this.title  },
                series: this.series,
            }
        }
    }
}
 /* eslint-disable no-debugger */
</script>