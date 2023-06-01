<template>
  <div class="search-result">
    <Header/>
    <div ref="ContSerBl" class="container-search-component">
      <Search class="search"/>
      <h3>{{description}}</h3>
    </div>
    <SearchResultGrid :result="result"/>

  </div>
</template>

<script>
import Header from "@/components/index/Header";
import Search from "@/components/index/Main/Search";
import SearchResultGrid from "@/components/search-result/SearchResultGrid";
export default {
  data(){
    return{
      description:'\r\n\r\n\r\n',
      result:{

      }
    }
  },
  components:{
    SearchResultGrid,
    Header,
    Search,
  },
  mounted() {
    this.SearchResult()
  },
  computed:{
    url(){
      return this.$route.query
    }
  },
  watch:{
    url(){
      this.SearchResult()
    }
  },
  methods:{
    async SearchResult(){
      const req = {
        params:{
          name:this.$route.query.name,
        }
      }
      if(this.$route.query.type === 'city'){
        let res =  await this.$axios.get('/search/city',{params:this.$route.query})
        this.result=res.data
        console.log(res)
      }
      else if(this.$route.query.type !== 'hotel'){
        let res = await this.$axios.get('/search-different', req)
        this.result = res.data
      }
    }
  }
}
</script>

<style scoped>

Header{
  background-color: black;
}
.search{
  margin: auto;
  border: #7B61FF solid 1px;
}
.container-search-component{
  background-color: black;
  width: 100vw;
  padding: 100px 0 0 0;
  background-size: cover;
  background-position: center;
}
.container-search-component > h3{
  background-color: black;
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 80%;
  margin: auto;
}
</style>
