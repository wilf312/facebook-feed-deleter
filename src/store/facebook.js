const initialState = {
  authResponse: {
    accessToken: '',
    expiresIn: 0,
    signedRequest: '',
    userID: ''
  }
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
    }
  }
}
