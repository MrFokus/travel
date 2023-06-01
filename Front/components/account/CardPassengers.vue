<template>
  <div class="card-passengers">
    <div v-if="Object.keys(passenger).length!==0" class="content">
      <h3 class="name">
        {{ passenger.name }}
      </h3>
      <p class="passport">{{ passenger.passport }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['passenger'],
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  .card-passengers{
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    display: inline-block;
    height: 66px;
    margin: 0 10px;
    box-shadow: 5px 5px 5px -7px rgba(0,0,0,.5);
  }
  .card-passengers:hover{
    background-color: #7B61FF;

  }
  .card-passengers:hover h3,.card-passengers:hover p{
    color: white;
  }
  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 10px;
  }
</style>
