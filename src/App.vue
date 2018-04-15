<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <Feed v-if="isLogin"/>
      <Login v-else />
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/Login'
import Feed from './components/Feed'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      title: 'facebook feed deleter'
    }
  },
  computed: {
    ...mapGetters('facebook', ['isLogin'])
  },
  name: 'App',
  components: {
    Feed,
    Login
  }
}
</script>
