<template>
  <div class="card-travel-history">
    <img :src="upcoming_trips.img" alt="">
    <div class="container-trip">
      <h2 class="name-trips">{{upcoming_trips.country}}</h2>
      <h4 class="hotel">{{upcoming_trips.hotel}}</h4>
      <p class="date"> Дата прибытия <strong>{{upcoming_trips.date_from}}</strong></p>
      <p class="date"> Дата отъезда <strong>{{upcoming_trips.date_to}}</strong></p>
    </div>
    <div class="container-passengers">
      <h2>Пассажиры</h2>
      <div class="passengers">
        <p v-for="passenger in upcoming_trips.passengers"> {{passenger.name}} <br> {{passenger.passport}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcoming_trips: {
        img:'https://s0.rbk.ru/v6_top_pics/media/img/0/34/756625385660340.jpg',
        country: "Египет",
        hotel: "Best of the best",
        date_from: "14.07.2023",
        date_to: "14.07.2023",
        passengers:[
          {
            name:"Иванов Иван Иванович",
            passport:"0312 904567",
          },
          {
            name:"Иванов Иван Иванович",
            passport:"0312 904567",
          },
          {
            name:"Иванов Иван Иванович",
            passport:"0312 904567",
          },
          {
            name:"Иванов Иван Иванович",
            passport:"0312 904567",
          },
        ]
      },
    }
  },
}
</script>

<style scoped>
  img{
    width: min(200px,40vw);
    height: min(200px,40vw);
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }
  .card-travel-history{
    display: flex;
  }
  .container-trip{
    margin: 0 30px;
  }
  .card-travel-history{
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  .passengers{
    overflow-x: scroll;

    height: min(150px, 20vw);
  }
</style>
