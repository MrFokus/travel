<template>
  <div class="account center">
    <div class="background"></div>
    <div class="content">
      <nuxt-link class="back" to="/">Назад</nuxt-link>
      <h1>Мои данные</h1>
      <div class="user-data">
        <div class="login">
          <p>Логин</p>
          <input v-model="login" type="text">
        </div>
        <div class="telephone">
          <p>Телефон</p>
          <input v-model="phone" type="tel">
        </div>
        <div class="email">
          <p>Электронная почта</p>
          <input v-model="mail" type="email">
        </div>
        <button @click="updateDataUser" class="save-user-data">Сохранить</button>
      </div>
      <h1>Сотрудники</h1>
      <div class="stuff">
        <!--TODO: сделать модальные окна добавления админа-->
        <button v-if="$store.getters['user/user'].role === 'manager'" class="add-passengers">+</button>
        <div class="scroll-cards">
          <CardPassengers v-for="pass in 10" :key="pass"/>
          <!--TODO: сделать модальные окна изменения админа -->
        </div>
      </div>
      <h1>Отчёты</h1>
      <div class="reports">
        <button class="report" v-for="btn in 3">
          Отчёт №{{btn}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CardUpcomingTrips from "@/components/account/CardUpcomingTrips";
import CardTravelHistory from "@/components/account/CardTravelHistory";
import CardPassengers from "@/components/account/CardPassengers";

export default {
  components: {
    CardUpcomingTrips,
    CardPassengers,
    CardTravelHistory,
  },
  data() {
    return {
      login:'',
      phone:"",
      mail:"",
    }
  },
  methods: {
    updateDataUser(){
      this.$store.dispatch("user/updateUser", {id: this.$store.getters["user/user"].id, login: this.login, phone:this.phone, mail: this.mail})
      // location.reload()
    }
  },
  mounted() {
    let user = this.$store.getters["user/user"]
    console.log(user)
    this.login = user.login;
    this.phone = user.phone;
    this.mail = user.mail;
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  outline: none;
  border: none;
}
</style>
<style scoped>
.account {
  min-height: 100vh;
}

.background {
  min-width: 100vw;
  min-height: 100vh;
  background: url("/bg-account.png") no-repeat center center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background-size: cover;
}

.add-passengers {
  background-color: white;
  outline: none;
  border: none;
  height: 66px;
  width: 66px;
  border-radius: 10px;
  padding: 0;
  flex-shrink: 0;
  margin: 0 10px;
  font-weight: 800;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0 0 4px 0;

}

.add-passengers:hover {
  color: white;
  background-color: #7B61FF;
}

.scroll-cards {
  width: 94%;
  height: 100px;
  overflow-x: scroll;
  flex-shrink: 0;
  display: flex;
}

.stuff {
  margin: 3vw 0 0 0;
  display: flex;
  overflow: hidden;
}

.scroll-cards > div {
  flex-shrink: 0;
}

.content {
  box-sizing: border-box;
  background: rgba(249, 249, 249, 0.53);
  border: 2px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12.5px);
  border-radius: 20px;
  width: min(1440px, 100vw);
  padding: 20px;
}

.user-data {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.user-data > div {
  margin: 0 10px 0 0;
}

.user-data > div, .user-data > div > input {
  width: min(300px, 100%);
}

.user-data > div > input {
  padding: 10px;
  border-radius: 0;
}

.save-user-data {
  align-self: flex-end;
  padding: 10px;
  border: none;
  width: min(100%, 100px);
  background-color: #7B61FF;
  color: white;
}

.save-user-data:active {
  background-color: #5b3cf8;
}

.upcoming-trips, .travel-history {
  display: flex;
  overflow: scroll;
}

.CardUpcomingTrips, .CardTravelHistory {
  margin: 0 0 0 20px;
  flex-shrink: 0;
}

.CardUpcomingTrips:first-child, .CardTravelHistory:first-child {
  margin: 0;
}
.back{
  padding: 8px 16px;
  background-color: #7B61FF;
  color: white;

}
.report{
  width: min(50%,150px);
  padding: 5px 10px;
  background-color: white;
  border: none;
  margin: 0 0 0 20px;
  border-radius: 5px;
  color: black;
}
.report:active{
  background-color: #5b3cf8;
  color: white;
}
@media screen and (max-width: 1440px) {
  .content {
    border-radius: 0;
    border: none;
    min-height: 100vh;
  }

}
</style>
