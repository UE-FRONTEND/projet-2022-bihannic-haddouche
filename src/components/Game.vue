<template>
    <WordFetcher ref="wordFetcher" @new-word="setRandomWord"/>
    <chronometre/>
    <div class="word-attempts">
        <WordDisplay 
        v-for="(word, index) in wordAttempts" 
        :key="index" 
        :proposedWord="word" 
        :targetWord="targetWord"
    />
    </div>
    <WordInput @submit-word="handleWordSubmit"/>

    <div v-if="showPopup" class="popup">
        <p>{{ popupMessage }}</p>
        <button @click="closePopup">OK</button>
    </div>

    <EndGamePopup 
        :isVisible="isGameOver" 
        :result="gameResult" 
        :attempts="wordAttempts.length" 
        :time="elapsedTime" 
        @close="isGameOver = false" 
        @replay="replayGame"
    />
</template>

<script>

import axios from 'axios';
import WordFetcher from "./WordFetcher";
import WordInput from "./WordInput";
import WordDisplay from './WordDisplay';
import EndGamePopup from './EndGamePopup.vue';
import Chronometre from "@/components/Chronometre.vue";
import 'simple-keyboard/build/css/index.css';

export default {
    name: 'Game',
    components: {
    WordFetcher,
    WordInput,
    WordDisplay,
    EndGamePopup,
    Chronometre,
    },
    emits: ['submitWord'],
    data() {
        return {
            targetWord: '',
            wordAttempts: [],
            showPopup: false,
            popupMessage: '',
            isGameOver: false,
            gameResult: 'victory',
            elapsedTime: '00:00'
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

                if (word === this.targetWord) {
                this.isGameOver = true;
                this.gameResult = 'victory';
                } else if (this.wordAttempts.length === 6) {
                this.isGameOver = true;
                this.gameResult = 'defeat';
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

        replayGame() {
            this.wordAttempts = [];
            this.isGameOver = false;
            this.fetchNewWord();
        },

        fetchNewWord() {
            this.$refs.wordFetcher.fetchRandomWord();
        },

        closePopup() {
            this.showPopup = false;
            this.popupMessage = '';
        }
    }
};
</script>



<style scoped>
.game-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
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
</style>

