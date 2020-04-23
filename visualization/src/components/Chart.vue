<template>
    <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import {Chart} from 'highcharts-vue'

export default {
    name: 'chart',
    data() {
        return {
            title: 'Prueba Tecnica',
            modo: 'spline',
            series: [
                {
                    data: [15, 3, 6, 2, 6, 4, 5, 5]
                },
                {
                    data: [12, 1, 4, 3, 8, 1, 3, 7]
                },
            ],
            // chartOptions: {
            //     series: this.speed[0].data.parameters[0]
            // },
            // title: {
            //     text: 'Solar Employment Growth by Sector, 2010-2016'
            // }
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
        },
    }
}
</script>