<template>
  <div class="landing">
    <div class="univbg border">
      <div style="background-color:black;" class="black container my-5">
        <h1>Nama Game</h1>
        <login v-if="toggle" @ask-register="goRegister" class="noopacity"></login>
        <register v-if="!toggle" @ask-login="goLogin" class="noopacity"></register>

        <!-- <button v-on:click.prevent="lobby">Start Now</button> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/Login'
import register from '@/components/Register'

export default {
  name: "home",
  components: {
    login,
    register
  },
  data() {
    return {
      toggle: false,
      // lobby() {
      //   this.$router.push('/lobby')
      // }
    }
  },
  methods: {
    goRegister() {
      this.toggle = false;
    },
    goLogin() {
      this.toggle = true;
    }
  }
};
</script>

<style scoped>
.black {
  height: 80vh;
  opacity: 0.8;
}
.univbg {
  background: url("../../public/landing1.gif");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center center;
  position: relative;
}
</style>
