<script>

import Chronometre from "@/components/Chronometre.vue";
import WordInput from "@/components/WordInput.vue";

import {defineComponent} from "vue";

export default defineComponent({
  name : "Home",
  components: {Chronometre,WordInput}
})
</script>

<template>
  <div id="app">
    <chronometre/>
    <h1>Jeu du mot</h1>
    <word-input @submit-word="handleWordSubmit"></word-input>
    <button @click="showStats">Statistiques</button>
    <div class="info-section">
      <p>Bienvenue dans le Jeu du mot! Trouvez le mot mystère en 6 tentatives.</p>
    </div>
  </div>
</template>

<style scoped>

</style>