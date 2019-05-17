<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import firebase from "@/firebase/index.js";
export default {
  mounted() {
    firebase.db.collection;
  }
};
</script>

<script>
import { mapMutations } from "vuex";

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
    ...mapMutations(["setLogin", "setLogout"])
  }
};
</script>

<style>
@font-face {
  font-family: "Pixel Digivolve";
  src: url("../public/Pixel Digivolve.otf");
}
@font-face {
  font-family: "Reactor7";
  src: url("../public/Reactor7.otf");
}
</style>
