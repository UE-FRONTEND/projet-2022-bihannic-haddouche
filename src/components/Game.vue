<template>
    <WordFetcher @new-word="setRandomWord"/>
    <WordInput @submit-word="handleWordSubmit" />
</template>

<script>

import axios from 'axios';
import WordFetcher from "./WordFetcher";
import WordInput from "./WordInput";
import 'simple-keyboard/build/css/index.css';

export default {
    name: 'Game',
    components: {
    WordFetcher,
    WordInput
    },
    emits: ['submitWord'],
    data() {
        return {
            api_response: ''
        };
    },
    methods: {

        handleWordSubmit(submittedWord) {
            this.SubmitWord(submittedWord);
        },

        async SubmitWord(word) {
            try {
                const response = await axios.post('https://vue-project-backend-eta.vercel.app/api/check-word', { 
                    word: word
                });
                this.api_response = response.data;
                console.log(this.api_response);
            } catch (error) {
                console.error("Erreur lors de l'envoi du mot à l'API:", error);
            }
        },

        setRandomWord(word) {
            // Traitez le mot aléatoire récupéré ici
            console.log("Mot aléatoire reçu:", word);
        }
    }
};
</script>



<style>


.error-message {
    color: red;
}

.valid-message {
    color: green;
}

</style>
