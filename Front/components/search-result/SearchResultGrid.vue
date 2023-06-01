<template>
  <div class="search-result-grid">
    <modal-hotel-room v-if="$route.query.type === 'hotel'"/>
    <div class="content">
      <div class="cards">
        <div class="card" v-for="(card,index) of result">
          <img v-if="card.photo!==''" @click="Redirect(index)" :src="card.photo" alt="">
          <div v-else class="dont-photo"></div>
          <h1>{{card.name}}</h1>
          <p>{{card.parent}}</p>
          <p v-if="card.description" class="description">{{card.description}}</p>
          <div class="price">
            <button @click="Buy(index)" class="buy" v-if="card.table_name === 'tour'">Купить</button>
            <p v-if="card.price">{{card.price}}₽ за 1 чел./дн.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHotelRoom from "@/components/search-result/ModalHotelRoom"
export default {
  props:['result'],
  components:{
    ModalHotelRoom,
  },
  data(){
    return{
      // search_result:[
      //   {
      //     id:12,
      //     name:"москва",
      //     type:'city',
      //     img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
      //   },
      //   {
      //     id:12,
      //     name:"краснодар",
      //     type:'city',
      //     img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
      //   },
      //   {
      //     id:12,
      //     name:"владивосток",
      //     type:'city',
      //     img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
      //   },
      //   {
      //     id:12,
      //     name:"иркутск",
      //     type:'city',
      //     img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
      //   },
      //   {
      //     id:12,
      //     name:"астрахань",
      //     type:'city',
      //     img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
      //   }
      // ],
    }
  },
  methods:{
    Redirect(i){
      let query =Object.assign({},this.$route.query, {type:this.result[i].table_name})
      query.name=this.result[i].name
      console.log(query)
      this.$router.push({path: 'search-result', query:query})
    },
    Buy(i){
      let query =Object.assign({},this.$route.query, {type:this.result[i].table_name})
      query.name=this.result[i].name
      console.log(query)
      this.$router.push({path: 'account', query:query})
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.search-result-grid{
  min-width: 100vw;
}
.content{
  width: min(1440px,100vw);
  margin: auto;
}
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  padding: 0 10px;
  width: 80%;
  margin: auto;
}
.card img{
  width: 100%;
  border-radius: 20px;
  min-width: 100%;
  background-color: #bdbdbd;
  height: 200px;
}
.card img:hover{
  cursor: pointer;
}
.card{
  padding:10px;
}
.dont-photo{
  min-width: 100%;
  background-color: #bdbdbd;
  height: 200px;
}
.price{
  display: flex;
  justify-content: space-between;
}
.price p{
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  font-weight: 600;
}
.buy{
  background-color: #7B61FF;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
