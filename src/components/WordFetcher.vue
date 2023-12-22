<template>
    <div v-show="false"></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WordFetcher',
    data() {
      return {
        randomWord: '',
      };
    },
    methods: {
      fetchRandomWord() {
        axios
          .get('https://vue-project-backend-eta.vercel.app/api/new-game')
          .then(response => {
            this.randomWord = response.data.word;
            this.$emit('new-word', this.randomWord);
          })
          .catch(error => {
            console.error('Error fetching random word:', error);
          });
      }
    },
    created() {
      this.fetchRandomWord();
    },
  };
  </script>
  