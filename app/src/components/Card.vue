<template>
  <div style="max-width:35vh;" class="border-0 mx-2 my-2 card bg-dark text-white">
    <img src="card2.jpg" class="card-img">
    <div class="card-img-overlay" style="text-align: center">
      <img style="height:18vh;" class="mt-4" :src="monsters.url">
      <h5
        style="font-family: 'Pixel Digivolve'; font-size:1.7rem;"
        class="card-title mt-5"
      >{{monsters.name}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["monsters"],
  name: "Card"
};
</script>

<style>
</style>
