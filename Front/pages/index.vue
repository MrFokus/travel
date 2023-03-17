<template>
  <div class="index">
    <Header/>
    <Main/>
  </div>

</template>

<script>
import Header from '@/components/index/Header'
import Main from "~/components/index/Main";
export default {
  components:{
    Main,
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700;800&display=swap');
  *{
    padding: 0;
    margin: 0;
  }
  Header{
    position: fixed;
  }
</style>
