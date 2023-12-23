<template>
  <div>
    <Chronometre class="chronometre-style"/>
    <WordInput @submit-word="handleWordSubmit" class="word-input-style"></WordInput>
    <router-link to="/findepartie" tag="button" id="btn-findepartie" class="btn-fin-de-partie">
      Fin de la partie
    </router-link>
  </div>
</template>

<script>
import Chronometre from "@/components/Chronometre.vue";
import { defineComponent } from "vue";
import WordInput from "@/components/WordInput.vue";

export default defineComponent({
  name: "Jeu",
  components: { WordInput, Chronometre },
  methods: {
    handleWordSubmit(word) {
      // Gérer la soumission du mot ici
    },
  },
});
</script>

<style scoped>
/* Style pour le bouton "Fin de la partie" */
.btn-fin-de-partie {
  background-color: #FF0000; /* Rouge */
  color: #FFFFFF; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-fin-de-partie:hover {
  background-color: #CC0000; /* Rouge plus foncé au survol */
}
</style>
