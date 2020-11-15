<template>
  <v-app>
    <Bar />
    <v-content>
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Bar from "./components/layout/Bar"
import Footer from "./components/layout/Footer"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Bar,
    Footer
  }
};
</script>
