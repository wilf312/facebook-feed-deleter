<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        <!-- <pre>
          {{JSON.stringify(feed, null, 2)}}
        </pre>
         -->

        <v-data-table
          hide-headers
          hide-actions
          v-model="selected"
          :items="feed"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox
                  primary
                  hide-details
                  :input-value="props.selected"
                ></v-checkbox>
              </td>
              <td v-if="props.item.message">{{props.item.message}}</td>
              <td v-else-if="props.item.story">{{props.item.story}}</td>
              <td v-else></td>
              <td><v-icon>ic_exit_to_app</v-icon></td>
            </tr>
          </template>
        </v-data-table>

        <v-btn @click="logout">Logout</v-btn>
        <v-btn @click="getFeed">getFeed</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Feed',
  methods: {
    ...mapActions('facebook', [
      'getFeed',
      'logout'
    ])
  },
  data () {
    return {
      selected: [],
      headers: [
        {
          text: '内容',
          align: 'left',
          sortable: false,
          value: 'story'
        }
      ]
    }
  },
  computed: {
    ...mapState('facebook', ['feed'])
  }
}
</script>
