<template>
  <div class="card-passengers">
    <div class="content">
      <h3 class="name">
        Иванов Иван Иванович
      </h3>
      <p class="passport">0345 054602</p>
    </div>
  </div>
</template>


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
