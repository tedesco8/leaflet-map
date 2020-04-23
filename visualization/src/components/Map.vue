<template>
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution">

            </l-tile-layer>
            <l-marker 
                :key="index"
                v-for="(c, index) in tracking"
                :lat-lng="latlng(c.position.latitude, c.position.longitude)"
            >
                <l-popup>
                    <div @click="innerClick">
                        <h3>{{c.vehicle_id}}</h3>
                        <ul>
                            <li>Id Vehiculo: {{c.document_id}}</li>
                            <li>Tiempo: {{c.timestamp}}</li>
                            <li>Curso: {{c.position.course}}</li>
                        </ul>
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
                zoom: 13,
                center: latLng(-33.170892, -58.180491),
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
            tracking: Array
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