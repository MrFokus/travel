<template>
  <div class="search-result-grid">
    <div class="content">
      <div class="cards">
        <div class="card" v-for="(card,index) of search_result">
          <img @click="Redirect(index)" :src="card.img" alt="">
          <h1>{{card.name}}</h1>
          <p>{{card.type}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search_result:[
        {
          id:12,
          name:"москва",
          type:'city',
          img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
        },
        {
          id:12,
          name:"краснодар",
          type:'city',
          img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
        },
        {
          id:12,
          name:"владивосток",
          type:'city',
          img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
        },
        {
          id:12,
          name:"иркутск",
          type:'city',
          img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
        },
        {
          id:12,
          name:"астрахань",
          type:'city',
          img:"https://static.guidego.ru/632c4b0365aa837bdc78b804.1600x1200.jpeg",
        }
      ],
    }
  },
  methods:{
    Redirect(i){
      this.$router.push({path: 'search-result', query:{ type: this.search_result[i].type, name:this.search_result[i].name}})
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
}
.card img:hover{
  cursor: pointer;
}
.card{
  padding:10px;
}
</style>
