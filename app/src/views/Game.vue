<template>
  <div class="landing">
    <div class="fixed-bottom">
      <div class="container">
        <div class="d-flex justify-content-between pb-1">
          <img src="three.gif" height="500px" alt class="player1">
          <img src="two.gif" height="500px" alt>
        </div>
      </div>
    </div>
    <div class="fixed-bottom actions">
      <div class="d-flex justify-content-between">
        <actionCard/>
        <actionCard/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import actionCard from "@/components/ActionCard";
export default {
  name: "game",
  components: {
    actionCard
  },
  data() {
    return {
      lobby() {
        this.$router.push("/lobby");
      }
    };
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
.landing {
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
</style>
