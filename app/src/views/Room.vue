<template>
  <div>
    {{ message }}
    <ul>
      <li v-for="(player, index) in players" :key="index" >{{ player }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from '@/firebase/index';
const db = firebase.db;
const roomRef = db.collection('rooms');

export default {
  name: 'Room',
  data() {
    return {
      players: [],
      message: '',
      monsterList: [],
    }
  },
  created() {
    this.getRoom();
  },
  methods: {
    getRoom() { 
      const id = this.$route.params.id;

      roomRef.doc(id)
        .onSnapshot((doc) => {
          this.players = [...doc.data().players];
        });
    }
  },
  watch: {
    players(value) {
      if(value.length === 2 ) {
        this.message = 'Full room';
        Object.freeze(this.players);
      }
    }
  }
}
</script>

<style>

</style>
