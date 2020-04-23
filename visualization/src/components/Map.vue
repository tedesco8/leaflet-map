<template>
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution">

            </l-tile-layer>
            <l-marker 
                :key="index"
                v-for="(c, index) in tracking.data"
                :lat-lng="latlng(c.position.latitude, c.position.longitude)"
            >
                <l-popup>
                    <div @click="innerClick">
                        <h3>{{c.vehicle_id}}</h3>
                        <ul>
                            <li>Id Vehiculo: {{c.data.document_id}}</li>document_id
                            <li>Tiempo: {{c.data.timestamp}}</li>
                            <li>Curso: {{c.data.course}}</li>
                        </ul>
                    </div>
                </l-popup>
            </l-marker>
        </l-map>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LPopup, LMarker } from 'vue2-leaflet';
    export default {
        name: 'Map',
        data() {
            return {
                zoom: 13,
                center: latLng(-34.87749017127787, -56.18675851667139),
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
</script>