<template>
  <div class="landing"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "game",
  components: {},
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
.landing {
  background: url("../../public/BG.gif") no-repeat center center fixed;
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
