<template>
 <!-- <div>
    <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="bg-blue-600 px-4 py-2 text-white text-center rounded font-bold shadow">
      Demarrer une partie
    </router-link>
  </div>-->
  <div>
    <chronometre/>
  </div>
</template>

<script>

import Chronometre from "@/components/Chronometre.vue";

export default {
  name: 'App',
  components: {Chronometre},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
