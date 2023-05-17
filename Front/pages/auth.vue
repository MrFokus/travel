<template>
  <div class="sign-in center">
    <div class="content center">
      <div class="sign-in-container">
        <h1>Добро пожаловать</h1>
        <p>Введите логин</p>
        <input type="email">
        <p>Введите пароль</p>
        <input type="password">
        <nuxt-link to="/registration">Нет аккаунта?</nuxt-link>
        <button>Войти</button>
      </div>

    </div>
  </div>
</template>

<script>
 export default {
   data(){
     return{
     }
   },
   methods:{
   }

 }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700;800&display=swap');
</style>
<style scoped>
.sign-in{
  width:100vw;
  min-height: 100vh;
  background: linear-gradient(254.49deg, #5237F9 -0.28%, #77FFF7 132.62%);
  backdrop-filter: blur(13px);
}
.center{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a{
  display: block;
  margin: 10px 0;
}
.content{
  width: min(425px,100vw);
  padding: 20px 0;
  background: rgba(237, 228, 228, 0.53);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12.5px);
  border-radius: 26px;
}
input{
  border: none;
  outline: none;
  border-radius: 5px;
  width:100%;
  padding: 5px;
}
button{
  background-color: #7B61FF;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
}
@media screen and (max-width:425px) {
  .content{
    border-radius: 0;
  }
}
</style>
