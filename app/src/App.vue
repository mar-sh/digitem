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


<style>
@font-face {
  font-family: "Pixel Digivolve";
  src: url("../public/Pixel Digivolve.otf");
}
</style>
