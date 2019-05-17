<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" @click.prevent="userLogout">Logout</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import firebase from '@/firebase/index'
import { mapMutations } from "vuex";

const auth = firebase.auth;

export default {
  name: "App",
  created() {
    if (localStorage.getItem("userId")) {
      this.setLogin();
    } else {
      this.setLogout();
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setLogin", "setLogout"]),
    userLogout() {
      auth.signOut().then(() => {
        console.log('sign out');
        this.setLogout();
        localStorage.clear();
        this.$router.push({ name: 'home' })
      }).catch((error) => {
      // An error happened.
      });
    },
  },
  
};
</script>

<style>
@font-face {
  font-family: "Pixel Digivolve";
  src: url("../public/Pixel Digivolve.otf");
}

.navbar {
background: transparent;
}
</style>
