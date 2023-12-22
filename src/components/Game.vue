<template>
    <WordFetcher @new-word="setRandomWord"/>
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
</template>

<script>

import axios from 'axios';
import WordFetcher from "./WordFetcher";
import WordInput from "./WordInput";
import WordDisplay from './WordDisplay';
import 'simple-keyboard/build/css/index.css';

export default {
    name: 'Game',
    components: {
    WordFetcher,
    WordInput,
    WordDisplay
    },
    emits: ['submitWord'],
    data() {
        return {
            targetWord: '',
            wordAttempts: [],
            showPopup: false,
            popupMessage: ''
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
                }
                else {
                    this.showPopup = true;
                    this.popupMessage = "Le mot n'est pas dans le dictionnaire.";
                }
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de l'envoi du mot à l'API:", error);
            }
        },

        setRandomWord(word) {
            this.targetWord = word;
            console.log("Mot aléatoire reçu:", word);
        },

        closePopup() {
            this.showPopup = false;
            this.popupMessage = '';
        }
    }
};
</script>



<style>
.game-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.word-attempts {
  margin-top: 20px;
}

.error-message {
  color: red;
}

.valid-message {
  color: green;
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

.popup p {
  margin: 0 0 10px 0;
}

.popup button {
  /* Style pour votre bouton */
}
</style>

