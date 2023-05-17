<template>
  <div class="search-block center">
    <div class="content center">
      <h1>Discover the most engaging places</h1>
      <Search/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/index/Main/Search'
export default {
  components:{
    Search,
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.search-block {
  background-image: url("static/bg-image.jpeg");
  width: 100vw;
  height: min(100vh, 825px);
  background-position: center;
  background-size: cover;
  border-radius: 0 0 64px 64px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;

}

.content {
  width: min(100%, 1440px);
  height: inherit;
  margin-bottom: 100px;
  flex-direction: column;

}

h1 {
  color: white;
  text-align: center;
  font-size: min(8vw, 64px);
  margin-bottom: 100px;
}

@media screen and (max-width: 740px) {
  .search-block {
    border-radius: 0;
  }
  h1{
    width: 80vw;
    text-align: center;
  }

}

</style>
