<template>
  <div>
    <div class="game" v-if="game">
      <div class="fixed-bottom">
        <div class="container">
          <div class="d-flex justify-content-between pb-1">
            <img :src="monsters[0].url.slice(2)" height="500px" alt class="player1">
            <img :src="monsters[1].url.slice(2)" height="500px" alt>
          </div>
        </div>
      </div>
      <div class="fixed-bottom actions">
        <div class="d-flex justify-content-between">
          <actionCard
          v-bind:monsters="monsters[0]"
          ></actionCard>
           <actionCard
          v-bind:monsters="monsters[1]"
          ></actionCard>
        </div>
      </div>
    </div>
    <div class="lobby" v-else>
      <div class="container">
        <div class="row py-5">
          <card v-on:habismilih="selectedMon" v-for="(i, index) in monsterslocal" :monsters="monsterslocal[index]" :key="index"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import _firebase from '@/firebase/index';
import firebase from 'firebase'
import actionCard from "@/components/ActionCard";
import card from "../components/Card";

const db = _firebase.db;
const roomRef = db.collection('rooms');
const monsRef = db.collection('monsters');

export default {
  name: "game",
  components: {
    actionCard,
    card
  },
   async created() {
   this.fetchMonster();
   this.getRoom();
 },
  data() {
    return {
      lobby: true,
      game: false,
      allmons: [],
      players: [],
      monsters: [],
      room: {},
      monsterslocal: [
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
    selectedMon(mon)  {
      console.log(this.allmons, '?');
      let monsta = this.allmons.filter(x => x.name == mon.name)
      localStorage.setItem('monsterName', mon.name)
      console.log(this.$route.params.id, '????');
      console.log(monsta[0], 'asasasas????');
      
      let obj = {
        hp : monsta
      }
      roomRef.doc(this.$route.params.id).update({
        monsters : firebase.firestore.FieldValue.arrayUnion({...monsta[0], url : mon.url})
      })
    },
    async fetchMonster() {
      const allmons = [];
      const monstersSnapshot = await monsRef.get();

      monstersSnapshot.forEach(monsterDoc => {
        const monster = monsterDoc.data();
        const skills = [];
        monster.skill.forEach(async skillDoc => {
          const skill = await skillDoc.get();
          const skillData = skill.data();
          skills.push(skillData);
        });
      allmons.push({ ...monster, id: monsterDoc.id, skill: skills });
   })

   this.allmons = allmons;
  },
    getRoom() {
      roomRef.doc(this.$route.params.id)
        .onSnapshot((doc) => {
          this.room = { id: doc.id, ...doc.data()};
          this.players = doc.data().players
          this.monsters = doc.data().monsters
        });
    },
  
  },
  watch: {
    monsters: function(value) {
      if(value.length >= 2 ) {
        this.game = true;
        this.lobby = false;
      } else {
          this.lobby = true;
          this.game = false;
      }
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
