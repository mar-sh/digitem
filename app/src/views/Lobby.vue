<template>
<div class="top">
  <div class="container ">
    <div class="row py-5">
      <card v-for="(i, index) in monsters" 
      :monsters="monsters[index]"
      :key="index"></card>
    </div>
  </div>
</div>
</template>

<script>
import card from "../components/Card";
export default {
  components: { card },
  data() {
      return {
          monsters : [
              {name : "Fiery Girl", 
              url : "one.gif"},
              {name : "Badass-looking Monster", 
              url : "two.gif"},
              {name : "Gabutmon", 
              url : "three.gif"},
              {name : "Sea Doggo", 
              url : "four.gif"},
              {name : "Security", 
              url : "five.gif"},
              {name : "Strong Dude", 
              url : "six.gif"},
              {name : "Kawaii Hammy", 
              url : "seven.gif"},
              {name : "Violet Poop", 
              url : "eight.gif"},
             {name : "Punk Wolf", 
              url : "nine.gif"},
              {name : "Event Listener", 
              url : "ten.gif"},
              
          ]
      }
  },
};
</script>

<style>
.top {
  background: url(../../public/bg3.gif);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200vh;
  background-position: center center;
  position: relative;
}
</style>
