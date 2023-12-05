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
    <p v-if="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: 'WordInput',
    data() {
    return {
        word: '',
        error: false,
        errorMessage: ''
    };
    },
    methods: {
    validateInput() {
        // Vérifier si le mot est composé uniquement de lettres et a 5 caractères
        if (!/^[a-zA-Z]{5}$/.test(this.word)) {
        this.error = true;
        this.errorMessage = 'Le mot doit être composé de 5 lettres';
        } else {
        this.error = false;
        this.errorMessage = '';
        }
    },
    submitWord() {
        // Soumettre le mot si valide
        if (!this.error && this.word.length === 5) {
        this.$emit('submit-word', this.word);
        this.word = ''; // Réinitialiser après la soumission
        }
    }
    }
};
</script>





<style>
.word-input input {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.word-input button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.word-input button:hover {
    background-color: #45a049;
}

.word-input p {
    color: red;
}
</style>
