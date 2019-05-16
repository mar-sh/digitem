<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'App',
  created() {
    if(localStorage.getItem('userId')) {
      this.setLogin();
    } else {
      this.setLogout();
    };
  },
  data() {
    return {

    }
  },
  methods:{
    ...mapMutations([
      'setLogin',
      'setLogout',
    ]),
  }

}
</script>

<style>

@font-face {
  font-family: "Pixel Digivolve";
  src: url('../public/Pixel Digivolve.otf');
}

</style>
