<template>
  <div class="search">
    <div class="input center searching">
      <img src="point.svg" alt="">
      <div>
        <p>Куда хотите?</p>
        <input @change="Relev()" v-model="InputObject" type="text">
        <div v-if="Object.keys(relevantStr).length>0" class="relev">
          <ul>
            <li @click="RelevSearch(row.name)" v-for="row in relevantStr">{{row.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="input center date">
      <img src="calendar.svg" alt="">
      <div>
        <p>На какие даты?</p>
        <div style="display: flex">
          <!--              <p style="font-weight: 700;color: black">С</p>-->
          <input v-model="DateFrom" type="date">
          –
          <!--              <p style="font-weight: 700; color: black">По</p>-->
          <input v-model="DateTo" type="date">
        </div>

      </div>
    </div>
    <div class="input center guests">
      <img src="visitor.svg" alt="">
      <div>
        <p>Сколько вас?</p>
        <select v-model="Peoples" name="guests">
          <option v-for="guest in 8" :value="guest">{{ guest }}</option>
        </select>
      </div>
    </div>
    <a @click="Search"><img src="search.svg" alt=""> <span class="word-search">Найти</span></a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      InputObject:null,
      DateFrom:null,
      DateTo:null,
      Peoples: '1',
      relevantStr:{}
    }
  },
  methods:{
    Search() {
      if (this.InputObject && this.DateFrom && this.DateTo && this.Peoples!== 0) {
        this.$router.push({
          path: 'search-result',
          query: {name: this.InputObject, dateFrom: this.DateFrom, dateTo: this.DateTo, peoples:this.Peoples}
        })
      } else {
        console.log("NULL params Input"); //TODO: Сделать модалку для ошибки
        console.log(typeof this.Peoples,this.Peoples)
      }
    },
    async Relev(){
      console.log(this.InputObject)
      if(this.InputObject.length>=3){
        let res = await this.$axios.get('/search/'+this.InputObject)
        this.relevantStr=res.data
      }
    },
    RelevSearch(name){
      this.InputObject = name;
      this.Search()
    }
  },
  watch:{
    InputObject(){
      this.Relev()
      if (this.InputObject.length===0){
        this.relevantStr = {}
      }
    }
  },
  mounted() {
    console.log(typeof this.Peoples,this.Peoples)
    if(Object.keys( this.$route.query).length!==0){
      this.InputObject =this.$route.query.name
      this.DateFrom=this.$route.query.dateFrom
      this.DateTo=this.$route.query.dateTo
      this.Peoples=this.$route.query.peoples
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  height: 88px;
  width: min(100%, 1140px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: min(1vw, 12px);
  padding: 8px;

}
.searching{
  position: relative;

}
.relev{
  position: absolute;
  width: 100%;
  padding: 8px;
  background-color: white;
}
.relev>ul li:first-child{
  border:none;
}
.relev>ul li{
  border-top: #bdbdbd 1px solid;
  cursor: pointer;
}
.relev>ul li:hover{
  background-color: #bdbdbd;
}
.input {
  flex-direction: row;
  width: min(30%, 300px);
}

.input:nth-child(2) {
  width: min(40%, 400px);
}

h1 {
  color: white;
  text-align: center;
  font-size: min(8vw, 64px);
}
.word-search{
  display: none;
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
  width: min(150px,18vw);
  margin: 0 0 0 5px;

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
.input:first-child{
  width: min(400px,30%);
}
.input > img {
  width: 40px;
}

.date {
  display: flex;
}

.date > img {
  width: 40px;
}
.date>div{
  margin: 0 0 0 2vw;
}
.date > div > div {

  justify-content: space-between;
}
.date input{
  border: black solid 1px;
}
.guests {
  flex-direction: row;
  width: min(20%,200px);
  margin-right: min(5vw, 100px);
}

.search > a {
  background-color: #7B61FF;
  padding: 10px;
  border-radius: 10px;
}

button {
  background-color: #7B61FF;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
}

.date > div > div > input {
  width: min(10vw, 200px);
}

@media screen and (max-width: 740px) {
  .search{
    align-items: normal;
  }
  .search {
    flex-direction: column;
    height: auto;
    width: min(90%, 400px);
    padding: min(2vw, 20px);

  }
  .input>div>input{
    width: min(150px,40vw);
  }
  img {
    margin: 0 2vw 0 0;
    width:min(10vw,40px);
    height: min(10vw,40px);
  }

  .input {
    width: min(100%, 360px);
    align-content: start;
    align-items: normal;
    justify-content: normal;
    margin: 0 0 2vw 2vw;
  }
  .date{
    width: 100%;
  }
  .date>div{
    width: 200px;
  }
  .date>div>div>input{
    width: min(20vw,150px);

  }
  h1{
    width: 80vw;
    text-align: center;
  }
  button{
    margin-bottom: 10vw;
  }
  .word-search{
    display: inline-block;
    color: white;
    font-size: min(5vw,24px);
    width: 80%;
    text-align: center;
  }
}

</style>
