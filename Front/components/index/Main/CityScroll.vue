<template>
  <div class="city-scroll">
    <h1>Популярные направления</h1>
    <div class="container">
      <div v-for="(city,index) in cities" :key="index" class="card">
        <img :src="city.img" alt="">
        <h2>{{city.country}}</h2>
        <p>{{city.city}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      cities:[
        {
          country:'Россия',
          city:'Москва',
          img:'https://all-aforizmy.ru/wp-content/uploads/2022/03/31942208356_b7e7a8972c_o.jpg',
        },
        {
          country:'Россия',
          city:'Москва',
          img:'https://mobimg.b-cdn.net/v3/fetch/67/672e81d6b92447531328663207c9599f.jpeg?w=1470&r=0.5625',
        },
        {
          country:'Россия',
          city:'Москва',
          img:'https://kartinkin.net/pics/uploads/posts/2022-08/1660512893_29-kartinkin-net-p-goroda-avstralii-krasivo-foto-33.jpg',
        },
        {
          country:'Россия',
          city:'Москва',
          img:'https://domdecor74.ru/upload/iblock/eb5/eb5b69212f3abd6d7dd8175a4798e178.jpg',
        },
        {
          country:'Россия',
          city:'Москва',
          img:'https://www.malls.ru/upload/iblock/02e/kazan.jpg',
        },
      ],

    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .city-scroll{
    margin: 20px auto;
    width: min(1360px,100vw);
  }
  .container{

    padding: 20px 0 0 0;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: min(1360px,100vw);
    display: flex;
  }
  .card{
    width: 200px;
    height: 250px;
    display: inline-block;
    margin: 0 0 0 5vw ;
  }
  .card>img{
    height: 200px;
    width: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

  }
  h1{
    margin: 0 0 0 5vw;
  }
</style>
