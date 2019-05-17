<template>
  <div>
    <button @click.prevent="createRoom">Create Room</button>
    <div>
      <button v-for="room in rooms" :key="room.id" @click.prevent="joinRoom(room.id)">Join Room {{ room.name}}</button>
    </div>
  </div>  
</template>

<script>
import firebase from 'firebase'
import _firebase from '@/firebase/index';

const db = _firebase.db;
const roomRef = db.collection('rooms');
const monRef = db.collection('monsters');

export default {
  name: 'Front',
  data() {
    return {
      rooms: [],
      monsterList: [],
    };  
  },
  created() {
    this.getMons();
    this.getRooms();
  },
  methods: {
    getMons() {
      const db = firebase.firestore();
    let monsterList= []
       db.collection('monsters')
        .get()
          .then((res) => {
          res.forEach((doc) => {
            let monster = { id:doc.id, ...doc.data()};
            monsterList.push(monster);
            })
            
            monsterList.forEach((monster) => {
              monster.skill.forEach((move, index) => {
                move.get()
                  .then((result) => {
                    monster.skill[index] = { id: result.id, ...result.data()};
                  })
            })
          })
          this.monsterList = [...monsterList];
      })
      .catch((err) => {
        console.log(err)
      })
    },

    
     joinRoom(id) {

       roomRef.doc(id)
        .onSnapshot((doc) => {
          if(doc.data().players.length < 2) {
            roomRef.doc(id)
            .update({
               players: firebase.firestore.FieldValue.arrayUnion(
                localStorage.getItem("email")
              ),
            })
            this.$router.push({ name: 'room', params: { id }})
          } else {
            console.log('full room bruv');
          }
          
        })


    },
    getRooms() {
      let roomList = [];
        roomRef
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              let room = { id: doc.id, ...doc.data() };
              roomList.push(room);
            })
            this.rooms = [...roomList];
          });
    }
  },
}
</script>

<style>

</style>
