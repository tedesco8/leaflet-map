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
            ]
        }
    },
    components: {
        highcharts: Chart 
    },
    props: {
        speed: Array
    },
    methods: {
        mapData() {
            let data = this.speed;
            data.map(function(i){
                var value = i.parameters[0].value
                return {data: value}
            })
        }
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
</script>