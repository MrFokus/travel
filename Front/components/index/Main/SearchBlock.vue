<template>
  <div class="search-block center">
    <div class="content center">
      <h1>Discover the most engaging places</h1>
      <button>Discover on 3D Globe</button>
      <div class="search center">
        <div class="input center">
          <img src="point.svg" alt="">
          <div>
            <p>Куда хотите?</p>
            <input placeholder="Введите место" type="text">
          </div>

        </div>
        <div class="input center date">
            <img src="calendar.svg" alt="">
          <div>
            <p>На какие даты?</p>
            <div style="display: flex">
<!--              <p style="font-weight: 700;color: black">С</p>-->
              <input type="date">
              –
<!--              <p style="font-weight: 700; color: black">По</p>-->
              <input type="date">
            </div>

          </div>
        </div>
        <div class="input center guests">
          <img src="visitor.svg" alt="">
          <div>
            <p>Сколько вас?</p>
            <select name="guests" >
              <option  v-for="guest in 8">{{guest}}</option>
            </select>
          </div>
        </div>
        <a href=""><img src="search.svg" alt=""></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.search-block {
  background-image: url("static/bg-image.jpeg");
  width: 100vw;
  height: min(100vh, 825px);
  background-position: center;
  background-size: cover;
  border-radius: 0 0 64px 64px ;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  width: min(100%, 1440px);
  height: inherit;
  margin-bottom: 100px;

}

.search {
  height: 88px;
  width: min(100%, 1140px);
  background-color: white;
  flex-direction: row;
  justify-content: normal;
  border-radius: min(1vw, 12px);
  padding: 8px;
  margin-top: 100px;
}

.input {
  flex-direction: row;
  width: min(30%,300px);
}
.input:nth-child(2){
  width: min(40%,400px);
}
h1{
  color: white;
  font-size: min(8vw,64px);
}
.input > div > input {
  border: none;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: black;
  border-bottom: 1px solid #bdbdbd;
  font-size: 16px;
  outline: none;
  padding: 3px;
  padding-left: 0;

}

.input > div > input::placeholder {
  color: black;
}

.input > div > p {
  font-family: "Poppins", sans-serif;
  color: black;
  margin: 0;
  font-weight: 200;
  font-size: 16px;
}

.input > img {
  margin-right: min(5%,16px);
  margin-left: min(15%,64px);
  width: 40px;
}

.date {
  display: flex;
}
.date>img{
  width: 40px;
}
.date>div>div{

  justify-content: space-between;
}
.guests{
  flex-direction: row;
  margin-right: min(5vw,130px);
}
.search>a{
  background-color: #7B61FF;
  padding: 10px;
  border-radius: 10px;
}
button{
  background-color: #7B61FF;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  margin-bottom: 150px;
}
.date>div>div>input{
  width: min(10vw, 120px);
}
</style>
