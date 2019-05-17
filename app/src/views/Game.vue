<template>
  <div>
    <div class="game" v-if="game">
      <div class="fixed-bottom">
        <div class="container">
          <div class="d-flex justify-content-between pb-1">
            <img id="mons1" src="/three.gif" height="500px" alt class="player1">
            <img id="mons2" src="/two.gif" height="500px" alt>
          </div>
        </div>
      </div>
      <div class="fixed-bottom actions">
        <div class="d-flex justify-content-between">
          <actionCard @skillclicked="animatePlayer1" @flee="fleeP1"/>
          <actionCard @skillclicked="animatePlayer2" @flee="fleeP2"/>
        </div>
      </div>
    </div>
    <div class="lobby" v-if="lobby">
      <div class="container">
        <div class="row py-5">
          <card v-for="(i, index) in monsters" :monsters="monsters[index]" :key="index"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import actionCard from "@/components/ActionCard";
import card from "../components/Card";
import { setTimeout } from "timers";
export default {
  name: "game",
  components: {
    actionCard,
    card
  },
  data() {
    return {
      lobby: false,
      game: true,
      monsters: [
        { name: "Fiery Girl", url: "../one.gif" },
        { name: "Badass-looking Monster", url: "../two.gif" },
        { name: "Gabutmon", url: "../three.gif" },
        { name: "Sea Doggo", url: "../four.gif" },
        { name: "Security", url: "../five.gif" },
        { name: "Strong Dude", url: "../six.gif" },
        { name: "Kawaii Hammy", url: "../seven.gif" },
        { name: "Violet Poop", url: "../eight.gif" },
        { name: "Punk Wolf", url: "../nine.gif" },
        { name: "Event Listener", url: "../ten.gif" }
      ]
    };
  },
  methods: {
    animatePlayer1() {
      console.log("masuk game");
      const monst1 = document.getElementById("mons1");
      const monst2 = document.getElementById("mons2");
      monst1.classList.add("animated", "jello");
      setTimeout(() => {
        monst2.classList.add("animated", "wobble");
      }, 1000);
      setTimeout(() => {
        monst1.classList.remove("animated", "jello");
        monst2.classList.remove("animated", "wobble");
      }, 2000);
    },
    animatePlayer2() {
      console.log("masuk game");
      const monst1 = document.getElementById("mons1");
      const monst2 = document.getElementById("mons2");
      monst2.classList.add("animated", "jello");
      setTimeout(() => {
        monst1.classList.add("animated", "wobble");
      }, 1000);
      setTimeout(() => {
        monst2.classList.remove("animated", "jello");
        monst1.classList.remove("animated", "wobble");
      }, 2000);
    },
    fleeP1() {
      console.log("masuk game");
      const monst1 = document.getElementById("mons1");
      monst1.classList.add("animated", "bounceOutLeft");
    },
    fleeP2() {
      console.log("masuk game");
      const monst2 = document.getElementById("mons2");
      monst2.classList.add("animated", "bounceOutRight");
    }
  }
};
</script>

<style scoped>
.player1 {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.game {
  background: url("../../public/BG.gif") no-repeat center center fixed;
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.action-container {
  background: url("../../public/actionbg.png");
}

.actions h1 {
  color: black;
}
.lobby {
  background: url(../../public/bg3.gif);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 200vh;
  background-position: center center;
  position: relative;
}
</style>
