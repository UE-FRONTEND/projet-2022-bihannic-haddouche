<script>
export default {
  name : "Home",
}
</script>

<template>
  <div id="app">
    <div class="info-section">
      <p> Bienvenue dans Mot Mystère, le jeu de devinette palpitant qui mettra vos compétences linguistiques à l'épreuve!</p>
      <p> Vous avez 10 minutes et seulement 6 tentatives pour percer le mystère d'un mot secret de 5 lettres.</p>
    </div>
    <div class="px-4 flex flex-col gap-y-12 h-full">
      <div class="flex flex-col gap-y-4">
        <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="bg-green px-4 py-2 text-white text-center rounded font-bold shadow">
          Démarrer une partie
        </router-link>

        <router-link to="/historique" tag="button" id="btn-historique" class="bg-light-blue px-4 py-2 text-white text-center rounded font-bold shadow">
          Statistiques
        </router-link>

        <div class="border bg-gray-100 rounded shadow px-4 py-4 flex flex-col gap-y-4 items-center mt-auto">
          <h2 class="text-2xl font-bold">Membre de l'équipe</h2>
          <ul class="flex flex-col gap-y-1 justify-center">
            <li>Lucas BIHANNIC</li>
            <li>Mokrane HADDOUCHE</li>
          </ul>
          <h2 class="text-2xl font-bold">Groupe: TP 51</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.px-4 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.gap-y-12 {
  gap: 1rem;
}

.gap-y-4 {
  gap: 1rem;
}

.h-full {
  height: 100%;
}

.bg-green {
  background-color: #1cdf24; /* Couleur verte */
}

.bg-light-blue {
  background-color: #ADD8E6; /* Couleur bleu clair */
}

.text-white {
  color: #ffffff;
}

.rounded {
  border-radius: 0.25rem;
}

.font-bold {
  font-weight: bold;
}

.shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-2xl {
  font-size: 1.5rem;
}

.items-center {
  align-items: center;
}

.border {
  border: 1px solid #e2e8f0;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.px-4 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.py-2 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.info-section {
  margin-top: auto;
}

.info-section {
  max-width: 600px;
  margin: 20px auto;
  padding: 10px ;
  background-color: #ecf0f1; /* Couleur de fond de la section */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Légère ombre portée */
}

p {
  font-size: 1.2em;
  color: #34495e; /* Couleur du texte */
  line-height: 1.5;
}
</style>