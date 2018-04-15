const state = {
  authResponse: {
    accessToken: '',
    expiresIn: 0,
    signedRequest: '',
    userID: ''
  }
}
export default {
  namespaced: true,

  state,

  getters: {
    isLogin () {
      return state.userID !== ''
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
    }
  },
  mutations: {
    login (state, res) {
      const {authResponse} = res
      console.log(state, authResponse)

      state.authResponse = {...authResponse}
    }
  }
}
