<template>
  <div id="app" v-if="museums.length">
    <Header />
    <Map :datamuseums="museums" v-if="museums.length > 0"></Map>
    <Footer></Footer>
  </div>
</template>

<script>
// Components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Map from "./components/Map.vue";

// Libraries

import Firebase from "firebase";

let config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  mapboxToken: process.env.VUE_APP_MAPBOX_TOKEN,
};

let app = Firebase.initializeApp(config);
let db = app.database();
let museumsRef = db.ref("museums");

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Map,
  },
  firebase: {
    museums: museumsRef,
  },
  data: function () {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
