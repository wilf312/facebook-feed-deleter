<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        <v-btn @click="logout">Logout</v-btn>
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
      'logout'
    ])
  }
}
</script>
