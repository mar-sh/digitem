<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button
          class="btn btn-outline-dark my-2 my-sm-0"
          type="submit"
          @click.prevent="userLogout"
        >Logout</button>
        <button
          class="btn btn-outline-dark my-2 my-sm-0"
          type="button"
          data-toggle="modal"
          data-target="#roomModal"
        >Create Room</button>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="roomModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Create a new Room</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label class="col-form-label">Room Name:</label>
                <input type="text" v-model="roomName" class="form-control">
              </div>
              <div class="form-group">
                <label class="col-form-label">Enter Pin:</label>
                <input type="password" v-model="roomPin" class="form-control">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              @click.prevent="createRoom"
            >Start a room</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal end -->

    <router-view/>
  </div>
</template>
<script>

import firebase from "firebase";
import _firebase from "@/firebase/index";
import { mapMutations } from "vuex";

const db = _firebase.db;
const auth = _firebase.auth;
const roomRef = db.collection("rooms");

export default {
  name: "App",
  data() {
    return {
      roomName: "",
      roomPin: ""
    };
  },
  created() {
    if (localStorage.getItem("userId")) {
      this.setLogin();
    } else {
      this.setLogout();
    }
  },
  methods: {
    ...mapMutations(["setLogin", "setLogout"]),
    userLogout() {
      auth
        .signOut()
        .then(() => {
          console.log("sign out");
          this.setLogout();
          localStorage.clear();
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          // An error happened.
        });
    },
    createRoom() {
      roomRef
        .add({
          name: this.roomName,
          pin: this.roomPin,
          players: [localStorage.getItem("email")],
          owner: localStorage.getItem("email"),
          monsters : [],
        })
        .then(doc => {
          this.roomName = "";
          this.roomPin = "";
          this.$router.push({ name: "game", params: { id: doc.id } });
        })
        .catch(err => {
          console.log(err);
        });
    }
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
.navbar {
  background: transparent;
}
</style>
