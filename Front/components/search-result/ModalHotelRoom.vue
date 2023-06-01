<template>
  <div class="modal-hotel-room">
    <div @click="BackPage()" class="out-side"/>
    <div class="modal">
      <button @click="SlideRoom(-1)" class="back-room"> < </button>
      <div v-if="result" class="content">
        <h1>{{result[indexRoom].name}}</h1>
        <div class="photo-slider">
          <button @click="SlidePhoto(-1)" class="back-photo"> < </button>
          <img :src="result[indexRoom].photo[indexPhoto]" alt="">
          <button @click="SlidePhoto(1)" class="next-photo"> > </button>
        </div>
        <p class="description">{{result[indexRoom].description}}</p>
<!--        <button class="select"> Забронировать</button>-->
      </div>
      <button @click="SlideRoom(1)" class="next-room"> > </button>

    </div>
  </div>
</template>

<script>

export default {
  props:['params'],
  data(){
    return{
      indexRoom:0,
      indexPhoto:0,
      result:null,
    }
  },
  methods:{
    BackPage(){
      if(this.$nuxt.context.from){
        this.$router.push(this.$nuxt.context.from)
      }
      else{
        //TODO BackRouting
      }
    },
    SlidePhoto(val){
      let len =this.result[this.indexRoom].photo.length
      if(len>this.indexPhoto+val&&this.indexPhoto+val>=0){
        this.indexPhoto+=val
      }
    },
    SlideRoom(val){
      let len =this.result.length
      if(len>this.indexRoom+val&&this.indexRoom+val>=0){
        this.indexRoom+=val
        this.indexPhoto=0
      }
    },
    async getRooms(){
        let res = await this.$axios.get('search/hotels', {params: this.$route.query})
        this.result = await res.data
        console.log(this.result[0].name)
    }
  },
  created() {
    this.getRooms()
  }

}
</script>

<style scoped>
.modal-hotel-room{
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.modal{
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  display: flex;
  width: 60%;
}
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
img{
  width: 90%;
  min-height: 300px;
  background-color: #bdbdbd;
}
.photo-slider{
  display: flex;
  justify-content: center;
  width: 100%;
}
.out-side{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
.back-room,.next-room{
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  color: white;
  padding: 0px 5px;
  font-size: 48px;
}
.next-photo,.back-photo{
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  color: white;
  padding: 0px 5px;
  font-size: 12px;
}
.select{
  background-color: #7B61FF;
  color: white;
  border: none;
  outline: none;
  padding: 8px 4px;
  border-radius: 8px;
}
</style>
