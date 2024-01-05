<template>
    <div class="word-input">
        <input
            type="text"
            v-model="word"
            @input="validateInput"
            @keyup.enter="submitWord"
            placeholder="Entrez un mot de 5 lettres"
            maxlength="5"
        />
        <button @click="submitWord">Valider</button>
        <button @click="abandonGame" class="btn-abandon">Abandonner</button>


        <p :class="{ 'error-message': error, 'valid-message': !error && word.length === 5 }">
            {{ errorMessage }}
        </p>
        <Keyboard ref="keyboard"
          @onChange="onChange" 
          @onKeyPress="onKeyPress" 
          :input="word" 
          :keyStates="keyStates"
        />
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
            errorMessage: 'Le mot doit être composé de 5 lettres',
            keyStates: {}, 
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
        },
        abandonGame() {
          // Émettre un événement pour signaler l'abandon
          this.$emit('abandon-game');
          //this.$store.commit("stopChrono");
        },
        updateKeyStates(letterStates) {
          // Transmettre les états au clavier
          if (this.$refs.keyboard) {
            this.$refs.keyboard.updateKeyStyles(letterStates);
          }
        },
    }
};
</script>

<style scoped>
.word-input {
  max-width: 500px;
  margin: auto;
  padding: 10px;
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

/* Style pour le bouton "Valider" */
.word-input button {
  width: 100%;
  background-color: #1cdf24;
  color: white;
  padding: 14px 20px;
  margin: 3px 0 0px 0; /* Espacement du bas réduit à 20px */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.word-input button:hover {
  background-color: #45a049;
}

.word-input .btn-abandon {
  background-color: #FF0000; /* Rouge */
  color: #FFFFFF; /* Blanc */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.word-input .btn-abandon:hover {
  background-color: #CC0000; /* Rouge plus foncé au survol */
}

.word-input p {
  min-height: 20px;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
}

.error-message {
  color: red;
}

.valid-message {
  color: green;
}
</style>
