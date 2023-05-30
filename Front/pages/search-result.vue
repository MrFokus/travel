<template>
  <div class="search-result">
    <Header/>
    <div ref="ContSerBl" class="container-search-component">
      <Search class="search"/>
      <h3>{{description}}</h3>
    </div>
    <SearchResultGrid/>

  </div>
</template>

<script>
import Header from "@/components/index/Header";
import Search from "@/components/index/Main/Search";
import SearchResultGrid from "@/components/search-result/SearchResultGrid";
export default {
  data(){
    return{
      description:'\r\n\r\n\r\n'
    }
  },
  components:{
    SearchResultGrid,
    Header,
    Search,
  },
  mounted() {
    console.log(this.$route.query.type)
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
