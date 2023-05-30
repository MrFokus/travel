export const state = () => ({
    slide_city:{},
})

export const getters = {
  slide_city: s=>s.slide_city,
}

export const mutations = {
    slide_city(store,payload){
      store.slide_city = payload
    }
}

export const actions = {
    async getSlideCity(ctx,params){
      const response = await  this.$axios.get('city')
      ctx.commit('slide_city',response.data)
    }
}
