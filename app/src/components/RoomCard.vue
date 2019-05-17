<template>
  <div class="col-3 py-2"> 
        <div class="card px-3 py-3">
          <div class="card-body">
            <h5 class="card-title">{{ room.name }}</h5>

            <p class="card-text">Get ready and enter your pin</p>
            <div class="input-group mb-3 my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Pin</span>
              </div>
              <input
                v-model="inputPin"
                type="password"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              >
            </div>
            <center>
              <a href class="btn btn-success" @click.prevent="joinRoom(room.id, room.pin)">FIGHT</a>
            </center>
          </div>
        </div>
      </div>
</template>

<script>
import firebase from 'firebase';
import _firebase from '@/firebase/index';

const db = _firebase.db;
const roomRef = db.collection('rooms');

export default {
  name: 'RoomCard',
  props: ['room'],
  data() {
    return {
      inputPin: '',
    };
  },
  methods: {
    joinRoom(id, pin) {
       roomRef.doc(id)
        .onSnapshot((doc) => {
          if(doc.data().players.length < 2 && this.inputPin == pin ) {
            roomRef.doc(id)
            .update({
               players: firebase.firestore.FieldValue.arrayUnion(
                localStorage.getItem("email")
              ),
            })
            this.$router.push({ name: 'room', params: { id }})
          } else {
            console.log('ndak bole masuk');
          }
          
        })
    },
  }
}
</script>

<style>

</style>
