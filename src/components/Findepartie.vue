<script setup>
</script>

<template>
  <div style="margin-bottom: 50px;">
    <router-link to="/" tag="button" id="btn-Home" class="btn-home">
      Revenir à la page d'accueil
    </router-link>
  </div>
  <div style="margin-bottom: 50px;"> <!-- Ajoutez un espace de 50 pixels -->
    <router-link to="/historique" tag="button" id="btn-historique" class="btn-historique">
      Voir les statistiques
    </router-link>
  </div>
  <div style="margin-bottom: 50px;"> <!-- Ajoutez un espace de 50 pixels -->
    <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="btn-demarrer-partie">
      Redémarrer une partie
    </router-link>
  </div>
</template>

<style scoped>
/* Style pour le bouton "Revenir à la page d'accueil" */
.btn-home {
  background-color: #3498db; /* Bleu */
  color: #ffffff; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-home:hover {
  background-color: #2980b9; /* Bleu plus foncé au survol */
}

/* Style pour le bouton "Voir les statistiques" */
.btn-historique {
  background-color: #87CEEB; /* Bleu clair */
  color: #ffffff; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-historique:hover {
  background-color: #5F9EA0; /* Bleu clair plus foncé au survol */
}

/* Style pour le bouton "Redémarrer une partie" */
.btn-demarrer-partie {
  background-color: #1cdf24; /* Vert */
  color: #ffffff; /* Blanc */
  padding: 10px 20px; /* Ajustez les valeurs de rembourrage selon vos besoins */
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-demarrer-partie:hover {
  background-color: #45A049; /* Vert plus foncé au survol */
}
</style>
