<template>
  <div  v-if="result!==null" class="modal-hotel-room">
    <div @click="BackPage()" class="out-side"/>
    <div class="modal">
      <button @click="SlideRoom(-1)" class="back-room"> <</button>
      <div class="content">
        <h1>{{ tour.name }}</h1>
        <h1>{{ result[indexRoom].name }}</h1>
        <div class="photo-slider">
          <button @click="SlidePhoto(-1)" class="back-photo"> <</button>
          <img :src="result[indexRoom].photo[indexPhoto]" alt="">
          <button @click="SlidePhoto(1)" class="next-photo"> ></button>
        </div>
        <p class="description">{{ result[indexRoom].description }}</p>
        <p v-if="result[indexRoom].price!==0" class="additional-price">Дополнительная стоимость: <strong>{{result[indexRoom].price}} ₽/чел</strong></p>

        <h3>Выберите пассажиров, которые поедут с вами</h3>
        <div class="scroll-cards">
          <div class="pass"  @click="selectPassenger(index)"  :key="index" v-for="(pass,index) in Passengers">
            <CardPassengers :passenger="pass" :ref="'pass'+index"/>
            <!--TODO: сделать модальные окна изменения пассажира -->
          </div>
        </div>
        <h3>Проверьте даты</h3>
        {{ $route.query.dateFrom }}-{{ $route.query.dateTo }}
        <h3>Общая стоимость <strong>{{this.finalPrice}} ₽</strong></h3>
        <button @click="" class="save">Офоримть</button>
      </div>
      <button @click="SlideRoom(1)" class="next-room"> ></button>

    </div>
  </div>
</template>

<script>

import CardPassengers from "@/components/account/CardPassengers";

export default {
  props: ['passengers'],
  components: {
    CardPassengers
  },
  data() {
    return {
      indexRoom: 0,
      indexPhoto: 0,
      result: null,
      tour: null,
      countAddedPass:0,
      finalPrice:0,
    }
  },
  computed:{
    Passengers(){
      let newRes=this.passengers;
      for (let i = 0; i < newRes.length; i++) {
        newRes[i].active = false
      }
      return newRes
    },
    Check(){
      const countAddPass = this.countAddedPass
      const indexRoom =this.indexRoom;
      return {indexRoom, countAddPass}
    }
  },
  watch:{
    Check(){
      this.FinalPrice()
    }
  },
  methods: {
    FinalPrice(){
      console.log((new Date(this.$route.query.dateTo)-new Date(this.$route.query.dateFrom))/(1000*60*60*24)+1)
      this.finalPrice = ((this.tour.price + this.result[this.indexRoom].price)*this.countAddedPass)*((new Date(this.$route.query.dateTo)-new Date(this.$route.query.dateFrom))/(1000*60*60*24)+1)
      console.log(this.finalPrice)
    },
    selectPassenger(index){
      if(this.countAddedPass<this.$route.query.peoples||this.Passengers[index].active) {
        this.Passengers[index].active = !this.Passengers[index].active
        if (this.Passengers[index].active) {
          this.$refs['pass' + index][0].$el.style.border = '2px #4c2de9 solid';
          this.countAddedPass++
        } else {
          this.$refs['pass' + index][0].$el.style.border = '2px #FFFFFF solid';
          this.countAddedPass--

        }
      }
    },
    BackPage() {
      if (this.$nuxt.context.from) {
        this.$router.push(this.$nuxt.context.from)
      } else {
        //TODO BackRouting
      }
    },
    SlidePhoto(val) {
      console.log(val)
      let len = this.result[this.indexRoom].photo.length
      this.indexPhoto += val
      if (this.indexPhoto >= len) {
        this.indexPhoto = 0
      }
      if (this.indexPhoto < 0) {
        this.indexPhoto = len - 1
      }

    },
    SlideRoom(val) {
      let len = this.result.length
      this.indexRoom += val
      if (this.indexRoom >= len) {
        this.indexRoom = 0
      }
      if (this.indexRoom < 0) {
        this.indexRoom = len - 1
      }
      this.indexPhoto = 0
    },
    async getRooms() {
      let res = await this.$axios('/search/tour', {params: this.$route.query})
      this.tour = res.data[0]
      console.log(res)
      let hot = await this.$axios('/search/hotels', {
        params: {
          name: res.data[0].hotel_name,
          dateFrom: this.$route.query.dateFrom,
          dateTo: this.$route.query.dateTo,
          peoples: this.$route.query.peoples
        }
      })
      console.log(hot)
      if (hot.data.length !== 0) {
        await this.$set(this.$data, 'result', hot.data)
      }
      console.log(this.result)
    }
  },
  created() {
    this.getRooms()
  }

}
</script>

<style scoped>
.modal-hotel-room {
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.modal {
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  display: flex;
  max-width: 60%;
  max-height: 90%;
}

.content {
  width: 100%;

  padding: 10px;
  overflow-y: scroll;
  top: 0
}

img {
  width: 90%;
  min-height: 300px;
  background-color: #bdbdbd;
}

.scroll-cards {
  width: 100%;
  height: 100px;
  overflow-x: scroll;
  flex-shrink: 0;
  display: flex;
}

.photo-slider {
  display: flex;
  justify-content: center;
  width: 100%;
}

.out-side {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}

.back-room, .next-room {
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  color: white;
  padding: 0px 5px;
  font-size: 48px;
}

.next-photo, .back-photo {
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  color: white;
  padding: 0px 5px;
  font-size: 12px;
}

.save {
  background-color: #7B61FF;
  color: white;
  border: none;
  outline: none;
  padding: 8px 4px;
  border-radius: 8px;
}
</style>
