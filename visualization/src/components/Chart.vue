<template>
    <highcharts :options="chartOptions"></highcharts>
</template>
<script>
import {Chart} from 'highcharts-vue'

export default {
    name: 'chart',
    data() {
        return {
            chartOptions: {
                series: [{
                    data: this.speed // sample data
                }]
            },
            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            }
        }
    },
    components: {
        highcharts: Chart 
    },
    props: {
        speed: Array
    }
}
</script>