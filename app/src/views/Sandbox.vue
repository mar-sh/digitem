<template>
  <div class="container border">
    <div class="row">
      <div v-for="(mon, index) in allmons.slice(0,2)" :key="index" class="col-3 mx-3">
        <BattleCard 
        v-on:serang="serang"
        v-bind:mon="mon"></BattleCard>
      </div>
    </div>
  </div>
</template>

<script>
import BattleCard from "@/components/BattleCard";
import firebase from "@/firebase/index";
const db = firebase.db;
const monsRef = db.collection("monsters");

export default {
  data() {
    return {
      allmons: []
    };
  },
  methods: {
    serang(att) {
      console.log(att, '///')
    }
  },
  components: { BattleCard },
  async created() {
    const allmons = [];
    const monstersSnapshot = await monsRef.get();

    monstersSnapshot.forEach(monsterDoc => {
      const monster = monsterDoc.data();
      const skills = [];
      monster.skill.forEach(async skillDoc => {
        const skill = await skillDoc.get();
        const skillData = skill.data();
        skills.push(skillData);
      });
      allmons.push({ ...monster, id: monsterDoc.id, skill: skills });
    })

    this.allmons = allmons;
  }
};
</script>

<style>
</style>
