export default {
  methods:{
    getAuthMixins(){
      const user = localStorage.getItem('user')

      if (user) {
        this.$store.commit('user/setUser', JSON.parse(user))
      }
    }
  }
}
