export const state = () => ({
  search:"",
})

export const getters = {
  user: s=>s.search,
}

export const mutations = {
  setUser(state,payload){
    state.search = payload
  }
}

