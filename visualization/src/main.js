import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import HighchartsVue from 'highcharts-vue'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

Vue.use(HighchartsVue)

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

axios.defaults.baseURL='https://backend.smartwaypanel.com/api/tracking/historical_data/';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')