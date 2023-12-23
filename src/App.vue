<template>

   <h1 class="text-center font-bold text-4xl">Mot Mystère</h1>

      <router-view></router-view>



</template>

<script>


import Chronometre from "@/components/Chronometre.vue";
import WordInput from './components/WordInput.vue';
import Historique from "@/components/Historique.vue";
export default {
  name: 'App',
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

/*-------------------------------------*/
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0; /* Couleur de fond */
  margin: auto;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

h1 {
  color: #2c3e50; /* Couleur du texte */
  text-shadow: 2px 2px 4px #555; /* Ombre du texte */
  padding: 10px;
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Légère ombre portée */
}

.font-bold {
  font-weight: bold;
}

.text-4xl {
  font-size: 2.5em;
}
</style>

