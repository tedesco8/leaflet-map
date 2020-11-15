<template>
  <v-footer height="auto">
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-card flat title color="secondary" class="white--text text-center">
            <v-card-text class="white--text pt-2">
              <h3><a href="https://dev.tedesco.es">Tedesco Dev</a> &copy; {{ new Date().getFullYear() }}</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style>
a {
    text-decoration: none !important;
}
</style>