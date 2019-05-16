<template>
  <div class="landing">
    <div class="univbg border">
      <div style="background-color:black;" class="black container my-5">
        <h1>Nama Game</h1>
        <login class="noopacity"></login>

        <button v-on:click.prevent="lobby">Start Now</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/Login'
export default {
  name: "home",
  components: {login},
  data() {
    return {
      lobby() {
        this.$router.push('/lobby')
      }
    }
  },
};
</script>

<style>


.black {
  height: 80vh;
  opacity: 0.8;
}
.univbg {
  background: url('../../public/landing1.gif');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center center;
  position: relative;
}
</style>
