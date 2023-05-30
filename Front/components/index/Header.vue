<template>
  <header class="center">
    <div class="content center">
      <div class="logo">
        <img src="logo.svg" alt="">
      </div>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="#">Hotels</nuxt-link>
        <nuxt-link to="#">Tours</nuxt-link>
        <nuxt-link to="#">Contact</nuxt-link>
      </nav>
      <div v-if="$store.getters['user/user']" class="profile center">
        <p class="user-name">Ales Nesetril</p>
        <nuxt-link to="/account"><img src="avatar.png" alt=""></nuxt-link>
      </div>
      <div v-else class="sign">
        <nuxt-link to="/auth">Войти</nuxt-link>
      </div>
      <div @click="foo()" class="mobile-menu-icon center">
        <div :class=" isMenuShow + ' burger'"><span></span></div>
      </div>
      <Transition name="showMenu">
        <div v-if="isMenu" class="mobile-menu center">
          <div class="profile center">
            <p class="user-name">Ales Nesetril</p>
            <nuxt-link to="/account"><img src="avatar.png" alt=""></nuxt-link>
          </div>
          <nav>
            <nuxt-link to="">Home</nuxt-link>
            <nuxt-link to="">Hotels</nuxt-link>
            <nuxt-link to="">Tours</nuxt-link>
            <nuxt-link to="">Contact</nuxt-link>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>
<script>

export default {

  data() {
    return {
      isMenu: false,
      isMenuShow: '',
    }
  },
  methods: {
    foo() {
      this.isMenu = !this.isMenu
      if (this.isMenuShow !== 'menu-show') {
        this.isMenuShow = 'menu-show';
      } else {
        this.isMenuShow = '';
      }

    }
  }
}
</script>
<style scoped>

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  margin: 0;
  padding: 0;
}

header {
  width: 100vw;
  top: 0;
}

.logo > img {
  width: min(15vw, 88px);
}

.content {
  width: min(100%, 1440px);
  margin: 10px 0 10px 0;
  padding: 0 1vw 0 1vw;
  flex-direction: row;
}

nav {
  width: max(55%, 1130px);
  display: flex;
  align-items: center;
  justify-content: center;
}

nav > a {
  font-family: 'Poppins', serif;
  margin-right: min(5vw, 64px);
  font-size: 14px;
}

nav > a:last-child {
  margin-right: 0;
}

.profile {
  flex-direction: row;
}

.profile > .user-name {
  font-family: 'Poppins', serif;
  font-size: 14px;
  color: white;
  margin-right: 10px;
}

.profile > a > img {
  width: min(15vw, 48px);
}

.mobile-menu {
  display: none;
}

@media screen and (max-width: 480px) {
  .burger {
    display: flex;
    align-items: center;
    z-index: 50;
    justify-content: flex-end;
    width: 25px;
    height: 25px;
    position: relative;

  }

  .burger span {
    background-color: aliceblue;
    border-radius: 5px;
    width: 25px;
    height: 3px;
    position: relative;
    transform-origin: center center;
    transition: all .5s;
  }

  .burger::before, .burger::after {
    content: '';
    width: 25px;
    height: 3px;
    background-color: aliceblue;
    border-radius: 5px;
    position: absolute;
    transition: all .5s;
    transform-origin: center center;
  }

  .burger:before {
    top: 0;
  }

  .burger:after {
    bottom: 0;
  }

  .content {
    justify-content: space-between;
    margin: 10px;
  }

  .mobile-menu-icon {
    height: 50px;
    width: 50px;
    /*position: relative;*/
  }

  .showMenu-enter-active,
  .showMenu-leave-active {
    transition: opacity 0.5s;
  }

  .showMenu-enter,
  .showMenu-leave-to {
    opacity: 0;
  }

  /*.closed {*/
  /*  width: 50px;*/
  /*  height: 50px;*/
  /*  position: absolute;*/
  /*  z-index: 10;*/
  /*}*/
  nav, .profile {
    display: none;
  }

  /*.menu-enter-active, .menu-leave-active { transition: all 5s; }*/
  /*.menu-enter, .menu-leave-active { opacity: 0; }*/
  .menu-show span {
    top: 5%;
    transform: rotate(90deg);
    transform-origin: center center;
    transition: all .5s;
  }

  .menu-show::before {
    top: 50%;
    transform: rotate(90deg) translate(0, -400%);
    transform-origin: center center;
  }

  .menu-show::after {
    top: 50%;
    transform: rotate(90deg) translate(0, 400%);
    transform-origin: center center;
  }

  .mobile-menu {
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    width: 200px;
    position: absolute;
    right: 20px;
    top: 70px;
    flex-direction: column;

  }

  .mobile-menu > nav {
    display: block;
    width: 100%;
  }

  .mobile-menu > .profile {
    display: flex;
    margin: 20px 0 20px 0;
  }

  .mobile-menu > nav > a {
    display: block;
    text-align: end;
    margin: 0 20px 10px 0;
    font-size: 16px;
  }

  .profile > .user-name {
    color: black;
  }
}
</style>
