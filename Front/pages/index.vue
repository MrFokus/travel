<template>
  <div class="index">
    <Header :class="headerBackground"/>
    <Main/>
  </div>

</template>

<script>
import Header from '@/components/index/Header'
import Main from "~/components/index/Main";
import auth from "@/mixins/auth";
export default {
  middleware:'auth',
  data(){
    return{
      headerBackground:"",
    }
  },
  components:{
    Main,
    Header,
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods:{
    handleScroll(event){
      if(window.scrollY>40){
        this.headerBackground='backGround';
      }
      else{
        this.headerBackground='';
      }
      console.log(window.scrollY)
    }
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
  .backGround{
    background-color: black;
  }
</style>
