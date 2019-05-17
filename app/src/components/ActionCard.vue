<template>
  <div style="max-width:50vw;" class="border-0 mx-2 my-2 card bg-dark text-white">
    <img src="/actionbg.png" class="card-img">
    <audio id="cursorSound">
      <source src="/selectSound.mp3">
    </audio>
    <div class="card-img-overlay act">
      <div class="row">
        <div class="col">
          <h5>Player 1</h5>
          <ul>
            <li>
              <img src="/cursor.png" height="30px" class="animated infinite pulse cursor">
              <a href="#" class="skill1" @click="onclicked">Fart</a>
            </li>
            <li>
              <img src="/cursor.png" height="30px" class="animated infinite pulse cursor">
              <a href="#" @click="onclicked">Lick</a>
            </li>
            <li>
              <img src="/cursor.png" height="30px" class="animated infinite pulse cursor">
              <a href="#" @click="flee">Flee</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li>Hp: 234/245</li>
            <li>Mp: 92/99</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// window.onload = function() {
//   let context = new AudioContext();
//   var audio = document.getElementById("cursorSound");
//   let list = document.getElementsByTagName("ul");
//   for (var li in list) {
//     list[li].addEventListener("mouseover", function() {
//       context.resume().then(() => {
//         audio.play();
//       });
//     });
//   }
//   let skills = document.getElementById("skill1");
//   skills.addEventListener("click", function() {});
// };
export default {
  methods: {
    onclicked() {
      console.log("masuk");
      this.$emit("skillclicked");
    },
    flee() {
      this.$emit("flee");
    }
  }
};
</script>

<style>
.act ul li,
.act h5 {
  font-family: "Reactor7";
  font-size: 2rem;
  line-height: 2rem;
  list-style: none;
  padding: 0;
}

.act ul li a {
  text-decoration: none;
  color: white;
}
.act ul li:hover {
  transform: scale(1.1);
}
.cursor {
  display: none;
}

.act ul li:hover > .cursor {
  display: inline;
}
</style>
