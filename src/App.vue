<template>

 <div>
    <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="bg-blue-600 px-4 py-2 text-white text-center rounded font-bold shadow">
      Demarrer une partie
    </router-link>
  </div>
  <router-view></router-view>

</template>

<script>


import Chronometre from "@/components/Chronometre.vue";
import WordInput from './components/WordInput.vue';
export default {
  name: 'App',
  components: {Chronometre,WordInput},
  methods: {
    handleWordSubmit(word) {
      // Logique pour gérer le mot soumis
      console.log("Mot soumis:", word);
    },
    showStats() {
      // Logique pour afficher les statistiques
    }
  }
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

button {
  margin: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}

.info-section {
  margin-top: 20px;
}
</style>

