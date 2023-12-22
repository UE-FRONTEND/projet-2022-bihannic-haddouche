<template>
    <div class="word-display">
      <span v-for="(letter, index) in proposedWord" :key="index" :class="getLetterClass(letter, index)">
        {{ letter }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WordDisplay',
    props: {
      proposedWord: String,
      targetWord: String
    },
    methods: {
      getLetterClass(letter, index) {
        if (this.targetWord[index] === letter) {
          return 'correct'; // Lettre correcte et bien placée
        } else if (this.targetWord.includes(letter)) {
          return 'present'; // Lettre correcte mais mal placée
        } else {
          return 'absent'; // Lettre incorrecte
        }
      }
    }
  };
  </script>
  



  
  <style>
  .word-display {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .word-display span {
    margin: 0 5px;
    padding: 10px;
    border: 1px solid #ddd;
    min-width: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
  }
  
  .correct {
    background-color: #4CAF50;
    color: white;
  }
  
  .present {
    background-color: #FFEB3B;
    color: black;
  }
  
  .absent {
    background-color: #9E9E9E;
    color: white;
  }
  </style>
  
  