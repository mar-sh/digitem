<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{mon.name}}</h5>
      
      <div >
        <a v-on:click="serang(mon.att)" v-for="(skill, index) in mon.skill" :key="index" href="#" class="card-link">{{skill.name}}</a>
      </div>

     
    </div>
  </div>
</template>

<script>
export default {
    props : ['mon'],
    data() {
      return {
        serang(att) {
          this.$emit('serang', att)
          
        }
      }
    }
    

};
</script>

<style>
</style>
