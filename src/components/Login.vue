<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn @click="login">Login</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  methods: {
    ...mapActions('facebook', [
      'login'
    ])
  }
}
</script>
