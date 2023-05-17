<template>
  <Loader v-if="isLoading"/>
  <UserAccount v-else-if="!isAdmin"/>
  <AdminAccount v-else/>
</template>

<script>
import CardUpcomingTrips from "@/components/account/CardUpcomingTrips";
import CardTravelHistory from "@/components/account/CardTravelHistory";
import CardPassengers from "@/components/account/CardPassengers";
import UserAccount from "@/components/account/UserAccount";
import AdminAccount from "@/components/account/AdminAccount";
import Loader from "@/components/Loader"

export default {
  components: {
    Loader,
    AdminAccount,
    UserAccount,
    CardUpcomingTrips,
    CardPassengers,
    CardTravelHistory,
  },
  data() {
    return {
      isLoading: true,
      isAdmin: '',
    }
  },
  methods: {

    checkAdmin() {
      this.isAdmin = !!localStorage.getItem('isAdmin');
      console.log(localStorage.getItem('isAdmin'))
      this.isLoading=false;

    }


  },
  mounted() {
    this.checkAdmin()
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

@media screen and (max-width: 1440px) {
  .content {
    border-radius: 0;
    border: none;
    min-height: 100vh;
  }

}
</style>
