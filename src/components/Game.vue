<template>
    <WordFetcher @new-word="setRandomWord"/>
    <div class="word-input">
    <input
        type="text"
        v-model="word"
        @input="validateInput"
        placeholder="Entrez un mot de 5 lettres"
        maxlength="5"
    />
    <button @click="submitWord">Valider</button>
    <p :class="{ 'error-message': error, 'valid-message': !error && word.length === 5 }">
      {{ errorMessage }}
    </p>
    <Keyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="word"/>
    </div>
</template>

<script>

import axios from 'axios';
import Keyboard from "./Keyboard";
import WordFetcher from "./WordFetcher";
import 'simple-keyboard/build/css/index.css';

export default {
    name: 'Game',
    components: {
    Keyboard,
    WordFetcher
    },
    data() {
        return {
            word: '',
            error: true,
            errorMessage: 'Le mot doit être composé de 5 lettres',
            api_response: ''
        };
    },
    methods: {
        validateInput() {
            // Vérifier si le mot est composé uniquement 5 lettres
            if (!/^[a-zA-Z]{5}$/.test(this.word)) {
                this.error = true;
                this.errorMessage = 'Le mot doit être composé de 5 lettres';
            } else {
                this.error = false;
                this.errorMessage = 'Mot valide';
            }
        },
        submitWord : async function () {
            // Soumettre le mot si valide
            if (!this.error) {
            this.$emit('submit-word', this.word);
            axios
                .post('https://vue-project-backend-eta.vercel.app/api/check-word ', { 
                    "word" : this.word
                })
                .then(response => {
                    this.api_response = response.data; console.log(this.api_response);
                    this.word = ''; 
                    this.validateInput()
                })
            }
        },
        onChange(input) {
            if (input.length <= 5) {
                this.word = input;
                this.validateInput();
            }
        },
        onKeyPress(button) {
            if (button == "{enter}"){
                this.submitWord()
            }
            console.log("button", button);
        },
        setRandomWord(word) {
        // Traitez le mot aléatoire récupéré ici
        console.log("Mot aléatoire reçu:", word);
    }
    }
};
</script>



<style>
.word-input {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f9f9f9;
}

.word-input input {
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 18px;
}

.word-input button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
}

.word-input button:hover {
    background-color: #45a049;
}

.word-input p {
    min-height: 20px;
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
}

.error-message {
    color: red;
}

.valid-message {
    color: green;
}

</style>
