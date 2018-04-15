<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Feed',
  methods: {
    ...mapActions('facebook', [
    ]),
    click () {
    }
  }
}
</script>
