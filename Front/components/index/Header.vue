<template>
  <header class="center">
    <div class="content center">
      <div class="logo">
        <img src="logo.svg" alt="">
      </div>
      <nav >
        <a href="">Home</a>
        <a href="">Hotels</a>
        <a href="">Tours</a>
        <a href="">Contact</a>
      </nav>
      <div class="profile center">
        <p class="user-name">Ales Nesetril</p>

        <img src="avatar.png" alt="">
      </div>
    </div>
  </header>
</template>

<style scoped>

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
*{
  margin: 0;
  padding: 0;
}
header {
  width: 100vw;
}
.logo>img{
  width: min(15vw,88px);
}
.content {
  width: min(100%, 1440px);
  margin: 10px 0 10px 0;
  padding: 0 1vw 0 1vw
}
nav{
  width: max(55%,1130px);
  display: flex;
  align-items: center;
  justify-content: center;
}
nav>a{
  font-family: 'Poppins', serif;
  margin-right:min(5vw,64px);
  font-size: 14px;
}
nav>a:last-child{
  margin-right: 0;
}
.profile>.user-name{
  font-family: 'Poppins', serif;
  font-size: 14px;
  color: white;
  margin-right: 10px;
}
.profile>img{
  width: min(15vw,48px);
}
</style>
