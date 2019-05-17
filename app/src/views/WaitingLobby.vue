<template>
  <div class="container border px-5 py-5 my-5">
    <h2 class="txtop">MEET YOUR OPPONENT</h2>

    <div class="row">
      <div v-for="(i, index) in 6" :key="index" class="col-3 py-2"> 
        <div class="card px-3 py-3">
          <div class="card-body">
            <h5 class="card-title">Nama room</h5>

            <p class="card-text">Get ready and enter your pin</p>
            <div class="input-group mb-3 my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Pin</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              >
            </div>
            <center>
              <a href class="btn btn-success">FIGHT</a>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _firebase from "@/firebase/index";

const db = _firebase.db;

export default {
  data() {
    return {
      monsterList: []
    };
  },
  methods: {
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

.txtop{
  font-family: 'Pixel Digivolve';
  font-size:5rem;
  color:black;
  text-align: center;
}
</style>
