<template>
  <div id="app">
    <h1>Jeu du mot</h1>
    <button @click="startGame">Démarrer une Partie</button>
    <button @click="showStats">Statistiques</button>
    <div class="info-section">
      <p>Bienvenue dans le Jeu du mot! Trouvez le mot mystère en 5 tentatives.</p>
    </div>
  </div>
</template>

<script>

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
</style>

