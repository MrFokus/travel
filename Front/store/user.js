export const state = () => ({
  user:"",
})

export const getters = {
  user: s=>s.user,
}

export const mutations = {
  setUser(state,payload){
    console.log(payload, 'gfdgfgffdgd')
    state.user = payload
  }
}

export const actions = {
  async updateUser(ctx, params) {
    console.log(params)
    let res =await this.$axios.put('/user/update',params)
  },
  async getUser(ctx,params){
    console.log(params)
    let res = await this.$axios.get(`/user/${params}`)
    console.log(res,"store")
    ctx.commit('setUser', res.data)
    return res
  }
}
