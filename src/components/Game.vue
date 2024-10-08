<template>
  <div class="header">
    <div class="home-button" @click="handleAbandonGame">Revenir à la page d'accueil</div>
  </div>
  <div class="game-container">

      <div class="center-container">
        <Chronometre class="chronometre-style" @time-up="handleTimeUp" />
        <p class="tentatives-message">{{ tentativesRestantes }} tentatives restantes</p>
      </div>

  </div>

    <WordFetcher ref="wordFetcher" @new-word="setRandomWord"/>

    <div class="word-attempts">
      <WordDisplay 
        v-for="(word, index) in wordAttempts" 
        :key="index" 
        :proposedWord="word" 
        :targetWord="targetWord"
        @letter-states="handleLetterStates"
      />
    </div>
    <WordInput ref="wordInput" @submit-word="handleWordSubmit" @abandon-game="handleAbandonGame"/>
    <div v-if="showPopup" class="popup">
        <p>{{ popupMessage }}</p>
        <button @click="closePopup">OK</button>
    </div>

    <EndGamePopup 
        :isVisible="isGameOver" 
        :result="gameResult" 
        :attempts="wordAttempts.length" 
        :time="calculateElapsedTime()"
        :motADeviner="motADeviner"
        @close="isGameOver = false"
    />
</template>

<script>

import Chronometre from "@/components/Chronometre.vue";
import axios from 'axios';
import WordFetcher from "./WordFetcher";
import WordInput from "./WordInput";
import WordDisplay from './WordDisplay';
import EndGamePopup from './EndGamePopup.vue';

import 'simple-keyboard/build/css/index.css';

export default {
    name: 'Game',
    components: {
    Chronometre,
    WordFetcher,
    WordInput,
    WordDisplay,
    EndGamePopup,

    },
    emits: ['submitWord'],
    data() {
        return {
            targetWord: '',
            wordAttempts: [],
          tentativesRestantes: 6,
            showPopup: false,
            popupMessage: '',
            isGameOver: false,
            gameResult: 'victory',
            timeUp:false,
          motADeviner:'',

        };
    },

    methods: {

        handleWordSubmit(submittedWord) {
            this.submitWord(submittedWord);
        },

        async submitWord(word) {
            try {
            const response = await axios.post('https://vue-project-backend-eta.vercel.app/api/check-word', { 
                word: word
            });

            if (response.data.isWord) {
                this.wordAttempts.push(word);
              this.tentativesRestantes = 6 - this.wordAttempts.length;
                if (word === this.targetWord) {
                this.isGameOver = true;
                this.gameResult = 'victory';

                  this.$store.commit("stopChrono");

                  const partie = {
                    date: new Date(),
                    tentatives: this.wordAttempts.length,
                    temps: this.calculateElapsedTime(),
                    reussite: true,
                    motADeviner: this.targetWord,
                  };

                  this.$store.commit("addPartieToHistorique", partie);
                } else if (this.wordAttempts.length === 6) {
                this.$store.commit("stopChrono");
                this.isGameOver = true;
                this.gameResult = 'defeat';
                this.motADeviner=this.targetWord;
                  this.$store.commit("stopChrono");

                  const partie = {
                    date: new Date(),
                    tentatives: this.wordAttempts.length,
                    temps: this.calculateElapsedTime(),
                    reussite: false,
                    motADeviner: this.targetWord,
                  };

                  this.$store.commit("addPartieToHistorique", partie);
                }

            } else {
                this.showPopup = true;
                this.popupMessage = "Le mot n'est pas dans le dictionnaire.";
            }
            } catch (error) {
            console.error("Erreur lors de l'envoi du mot à l'API:", error);
            }
        },

        setRandomWord(word) {
            this.targetWord = word;
            console.log("Mot aléatoire reçu:", word);
        },

        fetchNewWord() {
            this.$refs.wordFetcher.fetchRandomWord();
        },

        closePopup() {
            this.showPopup = false;
            this.popupMessage = '';
        },

        handleTimeUp() {
          this.isGameOver = true;
          this.gameResult = 'defeat';
          this.$store.commit("stopChrono");
          this.timeUp = true;
          this.motADeviner=this.targetWord;

          const partie = {
            date: new Date(),
            tentatives: this.wordAttempts.length,
            temps:this.calculateElapsedTime(),
            reussite: false,
            motADeviner: this.targetWord,
          };

          this.$store.commit("addPartieToHistorique", partie);
        },
        handleAbandonGame() {
          this.$store.commit("stopChrono");
          this.isGameOver = true;
          this.gameResult = 'defeat';
          this.motADeviner=this.targetWord;
          const partie = {
            date: new Date(),
            tentatives: this.wordAttempts.length,
            temps: this.calculateElapsedTime(),
            reussite: false,
            motADeviner: this.targetWord,
          };

          this.$store.commit("addPartieToHistorique", partie);
        },

      calculateElapsedTime() {
        if (this.timeUp) {
          // Si le jeu est terminé par une défaite (time-up), retournez "10:00"
          return "10:00";
        }

        const initialMinutes = 9;
        const initialSeconds = 60;
        const currentMinutes = this.$store.getters.getMinutes;
        const currentSeconds = this.$store.getters.getSecondes;

        const elapsedMinutes = initialMinutes - currentMinutes;
        const elapsedSeconds = initialSeconds - currentSeconds;

        return `${('0' + elapsedMinutes).slice(-2)}:${('0' + elapsedSeconds).slice(-2)}`;
      },

      handleLetterStates(letterStates) {
        if (this.$refs.wordInput) {
          this.$refs.wordInput.updateKeyStates(letterStates);
        }
      },

  }
};
</script>



<style scoped>
.game-container {
  max-width: 600px;
  margin: -40px auto 5px auto;
  padding: 0px;
  text-align: center;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0px; /* Augmentation de la marge à gauche */
  margin-right: 0px; /* Ajout de marge à droite */
}
.home-button {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  text-align: left; /* Alignement du texte à gauche */
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #2980b9;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.word-attempts {
  margin-top: 20px;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Assurez-vous qu'il est au-dessus des autres éléments */
}

.popup button {
  background-color: #4CAF50; /* Couleur de fond du bouton */
  color: white; /* Couleur du texte */
  padding: 10px 15px; /* Padding autour du texte */
  border: none; /* Pas de bordure */
  border-radius: 5px; /* Bordures arrondies */
  cursor: pointer; /* Change le curseur pour indiquer qu'il s'agit d'un bouton cliquable */
  font-size: 16px; /* Taille de la police */
  transition: background-color 0.3s; /* Transition pour l'effet de survol */
}

.popup button:hover {
  background-color: #45a049; /* Changement de couleur lors du survol */
}

.popup p {
  margin-bottom: 15px; /* Espace entre le texte et le bouton */
}

/*.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0vh; /* Garantit que le conteneur occupe au moins la hauteur de la fenêtre *
}*/
.chronometre-style {
  font-size: 40px;
  color: #333;
  background-color: #f8f8f8;
  padding: 1px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-weight: 1000;
}
.tentatives-message {
  font-size: 20px;
  color: #333;
  margin-top: 10px;
}
.home-button {
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
.home-button:hover {
  background-color: #2980b9; /* Changement de couleur lors du survol */
}
</style>

