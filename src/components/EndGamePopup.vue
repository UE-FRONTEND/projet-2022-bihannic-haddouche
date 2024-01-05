<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content" :class="{ victory: result === 'victory', defeat: result === 'defeat' }">

      <h2>{{ resultMessage }}</h2>
      <p v-if="result === 'defeat'">Le mot était : {{ motADeviner }}</p>
      <p>Nombre de tentatives : {{ attempts }}</p>
      <p>Temps écoulé : {{ time }}</p>
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



    </div>
  </div>
</template>

<script>
export default {
  name: 'EndGamePopup',
  props: {
    isVisible: Boolean,
    result: {
      type: String,
      default: 'victory'
    },
    attempts: {
      type: Number,
      default: 0
    },
    time: {
      type: String,
      default: '00:00' // Le format du temps est à définir
    },
    motADeviner: {
      type: String,
      default: ''
    }
  },


  computed: {
    resultMessage() {
      return this.result === 'victory' ? 'Félicitations ! Vous avez trouvé le mot !' : 'Dommage ! Réessayez.' ;
    }
  },
  methods: {
    /* replayGame() {
      this.$emit('replay');
    }*/
  }
}
</script>
  
  <style scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .popup-content.victory h2 {
    color: #4CAF50; /* Couleur verte pour la victoire */
  }
  
  .popup-content.defeat h2 {
    color: #f44336; /* Couleur rouge pour la défaite */
  }
  
  .popup-content button {
    background-color: #4CAF50; /* Couleur de fond par défaut */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .popup-content button:hover {
    background-color: #45a049;
  }
  
  .popup-content.defeat button {
    background-color: #f44336; /* Changement de couleur pour le bouton en cas de défaite */
  }
  
  .popup-content.defeat button:hover {
    background-color: #d32f2f;
  }

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


  </style>
  
  