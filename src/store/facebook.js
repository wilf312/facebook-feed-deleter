// TODO delete
import dummy from './dummy'

const initialState = {
  authResponse: {
    accessToken: '',
    expiresIn: 0,
    signedRequest: '',
    userID: ''
  },
  feed: []
}
export default {
  namespaced: true,

  state: JSON.parse(JSON.stringify(initialState)),

  getters: {
    isLogin ({authResponse}) {
      return authResponse.userID !== ''
    }
  },
  actions: {
    login ({commit}) {
      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          console.log('Logged in.')
          commit('login', response)
        } else {
          FB.login((response) => { commit('login', response) })
        }
      })
    },
    logout ({commit}) {
      console.log('logout...')
      FB.logout()
      commit('reset')
    },
    getFeed ({commit}) {
      FB.api('/me/feed', (response) => {
        console.log(response)

        commit('setFeed', dummy.data)
      })
    }
  },
  mutations: {
    login (state, res) {
      const {authResponse} = res
      console.log(state, authResponse)

      state.authResponse = {...authResponse}
    },
    reset (state) {
      state.authResponse = {...initialState.authResponse}
    },
    setFeed (state, feed) {
      state.feed = feed || []
    }
  }
}
