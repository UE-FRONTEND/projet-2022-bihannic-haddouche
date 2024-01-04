<template>
  <div class="historique-container">
    <div class="button-container">
      <router-link to="/" tag="button" id="btn-Home" class="btn-home">
        Revenir à la page d'accueil
      </router-link>
      <router-link to="/jeu" tag="button" id="btn-demarrer-partie" class="btn-demarrer-partie">
        Démarrer une partie
      </router-link>
    </div>

    <h1>Statistiques</h1>
    <p>Temps moyen de jeu : {{ tempsMoyenDeJeu }}</p>
    <p>Nombre de tentatives moyennes : {{ tentativesMoyennes }}</p>
    <p>% de victoire : {{ pourcentageVictoire }}%</p>

    <h2>Historique des parties</h2>
    <table class="historique-table">
      <thead>
      <tr>
        <th>Date</th>
        <th>Tentatives</th>
        <th>Temps de jeu</th>
        <th>Réussite</th>
        <th>Mot à deviner</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(partie, index) in historique" :key="index">
        <td>{{ partie.date }}</td>
        <td>{{ partie.tentatives }}</td>
        <td>{{ partie.temps }}</td>
        <td>{{ partie.reussite ? 'Oui' : 'Non' }}</td>
        <td>{{ partie.motADeviner }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script >
export default {
  name: 'Historique',
  methods: {
    convertTempsToSeconds(temps) {
      if (!temps || typeof temps !== 'string') {
        return 0; // Valeur par défaut si temps n'est pas défini ou n'est pas une chaîne de caractères
      }

      const [minutes, secondes] = temps.split(':');
      return parseInt(minutes) * 60 + parseInt(secondes);
    },

    formatSecondsToTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${('0' + minutes).slice(-2)}:${('0' + remainingSeconds).slice(-2)}`;
    },


  },
  computed: {
    historique() {
      return this.$store.state.historique;
    },
    tempsMoyenDeJeu() {
      if (this.historique.length === 0) return 'N/A';

      const totalTemps = this.historique.reduce((acc, partie) => acc + this.convertTempsToSeconds(partie.temps), 0);
      const tempsMoyen = totalTemps / this.historique.length;

      return this.formatSecondsToTime(Math.round(tempsMoyen));
    },

    tentativesMoyennes() {
      if (this.historique.length === 0) return 'N/A';

      const totalTentatives = this.historique.reduce((acc, partie) => acc + partie.tentatives, 0);
      const tentativesMoyennes = totalTentatives / this.historique.length;

      return tentativesMoyennes.toFixed(2); // Affichez deux décimales
    },
    pourcentageVictoire() {
      if (this.historique.length === 0) return 'N/A';

      const victoires = this.historique.filter(partie => partie.reussite).length;
      const pourcentage = (victoires / this.historique.length) * 100;

      return pourcentage.toFixed(2); // Affichez deux décimales
    },
  },
}
</script>



<style scoped>
/* Styles pour le conteneur des boutons */
.button-container {
  display: flex;
  justify-content: space-between; /* Pour espacer les boutons à chaque extrémité */
  margin-bottom: 20px; /* Ajout d'une marge en bas */
}

/* Styles pour les boutons (identiques à la réponse précédente) */
.btn-home,
.btn-demarrer-partie {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-home:hover {
  background-color: #2980b9;
}

.btn-demarrer-partie {
  background-color: #1cdf24;
}

.btn-demarrer-partie:hover {
  background-color: #45a049;
}

/* Style pour le tableau d'historique */
.historique-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Ajout d'une marge en haut */
}

.historique-table th,
.historique-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.historique-table th {
  background-color: #f2f2f2;
}
</style>
