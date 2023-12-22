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
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de l'envoi du mot à l'API:", error);
            }
        },

        setRandomWord(word) {
            this.targetWord = word;
            console.log("Mot aléatoire reçu:", word);
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
</style>

