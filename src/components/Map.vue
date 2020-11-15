<template>
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution">

            </l-tile-layer>
            <l-marker 
                :key="index"
                v-for="(c, index) in arr"
                :lat-lng="latlng(c.lat, c.lng)"
            >
                <l-popup>
                    <div @click="innerClick">
                        <div>
                            <img :src="c.img" alt="MDN" width="300" height="150">
                        </div>
                        <h3>{{c.title}}</h3>
                        <span>{{c.location}}</span>
                        <p>
                            {{c.description}}
                        </p>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
</template>
<script>
 /* eslint-disable no-debugger */
import { latLng } from "leaflet";
import { LMap, LTileLayer, LPopup, LMarker } from 'vue2-leaflet';
    export default {
        name: 'Map',
        data() {
            return {
                zoom: 7,
                center: latLng(-32.875555, -56.020152),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(47.41322, -1.219482),
                withTooltip: latLng(47.41422, -1.250482),
                currentZoom: 11,
                currentCenter: latLng(-34.9032784, -56.1881599),
                showParagraph: false,
                marker: latLng(47.413220, -1.219482),
                mapOptions: {
                    zoomSnap: 0.5
                },
                showMap: true
            }
        },
        props: {
            arr: Array
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        methods: {
            latlng: function(lat, lng) {
                
                return latLng(lat, lng);
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            innerClick() {
                this.showLongText();
            }
        }
    }
/* eslint-disable no-debugger */
</script>