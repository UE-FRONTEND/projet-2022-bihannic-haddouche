<template>
  <div id="app">
    <h1>Jeu du mot</h1>
    <h3>Mokrane Hadouche, Lucas Bihannic TP51</h3>
    <word-input @submit-word="handleWordSubmit"></word-input>
    <button @click="showStats">Statistiques</button>
    <div class="info-section">
      <p>Bienvenue dans le Jeu du mot! Trouvez le mot mystère en 6 tentatives.</p>
    </div>
  </div>
</template>

<script>

import WordInput from './components/WordInput.vue';

export default {
  name: 'App',
  components: {
    WordInput
  },
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

