import Vue from 'vue'
import App from './App.vue'
// import { L } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import VueFire from 'vuefire'
import dotenv from 'dotenv'
dotenv.config()

// this part resolve an issue where the markers would not appear
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



Vue.config.productionTip = false
Vue.use(VueFire)


new Vue({
  render: h => h(App),
}).$mount('#app')
