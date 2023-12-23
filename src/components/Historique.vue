<script setup>
</script>

<template>
  <div class="button-container">
    <router-link to="/" tag="button" id="btn-Home" class="btn-home">
      Revenir à la page d'accueil
    </router-link>
    <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="btn-demarrer-partie">
      Démarrer une partie
    </router-link>
  </div>
</template>

<style scoped>
/* Style pour le conteneur des boutons */
.button-container {
  display: flex;
  flex-direction: row; /* Pour placer les boutons côte à côte */
  align-items: center; /* Pour centrer verticalement */
  justify-content: center; /* Pour centrer horizontalement */
  height: 50vh; /* Pour ajuster la hauteur du conteneur à 80% de la fenêtre */
}

/* Styles pour les boutons (identiques à la réponse précédente) */
.btn-home, .btn-demarrer-partie {
  background-color: #3498db; /* Bleu pour Revenir à la page d'accueil */
  color: #ffffff; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px; /* Ajout d'une marge horizontale de 5 pixels */
}

.btn-home:hover {
  background-color: #2980b9; /* Bleu plus foncé au survol */
}

.btn-demarrer-partie {
  background-color: #1cdf24; /* Vert pour Démarrer une partie */
  color: #ffffff; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px; /* Ajout d'une marge horizontale de 5 pixels */
}

.btn-demarrer-partie:hover {
  background-color: #45A049; /* Vert plus foncé au survol */
}
</style>
