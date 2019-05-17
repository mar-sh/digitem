<template>
  <div class="container border px-5 py-5 my-5">
    <h2 class="txtop">MEET YOUR OPPONENT</h2>
    <div class="row">
      <RoomCard v-for="(room, index) in roomList" :key="index" :room="room"></RoomCard>
    </div>
  </div>
</template>

<script>
import _firebase from "@/firebase/index";
import RoomCard from "@/components/RoomCard";

const db = _firebase.db;
const roomRef = db.collection("rooms");

export default {
  name: "WaitingLobby",
  components: {
    RoomCard
  },
  data() {
    return {
      inputPin: "",
      roomList: [],
      monsterList: []
    };
  },
  created() {
    this.getRooms();
  },
  methods: {
    getRooms() {
      let rooms = [];
      roomRef.onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          let room = { id: doc.id, ...doc.data() };
          rooms.push(room);
        });
        this.roomList = [...rooms];
      });
    },

    getMons() {
      const db = firebase.firestore();
      let monsterList = [];
      db.collection("monsters")
        .get()
        .then(res => {
          res.forEach(doc => {
            let monster = { id: doc.id, ...doc.data() };
            monsterList.push(monster);
          });

          monsterList.forEach(monster => {
            monster.skill.forEach((move, index) => {
              move.get().then(result => {
                monster.skill[index] = { id: result.id, ...result.data() };
              });
            });
          });
          this.monsterList = [...monsterList];
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.txtop {
  font-family: "Pixel Digivolve";
  font-size: 5rem;
  color: black;
  text-align: center;
}
</style>
