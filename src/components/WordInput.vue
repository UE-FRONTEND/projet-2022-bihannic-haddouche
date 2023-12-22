<template>
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

import Keyboard from "./Keyboard";

export default {
    name: 'WordInput',
    components: {
    Keyboard
    },
    data() {
        return {
            word: '',
            error: true,
            errorMessage: 'Le mot doit être composé de 5 lettres'
        };
    },
    methods: {
        validateInput() {
            if (!/^[a-zA-Z]{5}$/.test(this.word)) {
                this.error = true;
                this.errorMessage = 'Le mot doit être composé de 5 lettres';
            } else {
                this.error = false;
                this.errorMessage = 'Mot valide';
            }
        },
        submitWord() {
            if (!this.error) {
                this.$emit('submit-word', this.word);
                this.word = '';
                this.validateInput();
            }
        },
        onChange(input) {
            if (input.length <= 5){
                this.word = input;
                this.validateInput();
            }
        },
        onKeyPress(button) {
            if (button === "{enter}") {
                this.submitWord();
            }
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
  margin-bottom: 20px;
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
  text-align: center;
  margin-top: 10px;
}
</style>
