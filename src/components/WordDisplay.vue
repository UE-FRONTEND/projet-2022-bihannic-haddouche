<template>
  <div class="word-display">
    <span
      v-for="(letter, index) in proposedWord"
      :key="index"
      :class="getLetterClass(letter, index)">
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
    mounted() {
      this.emitLetterStates();
    },
    watch: {
      proposedWord() {
        this.emitLetterStates();
      }
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
      },
      emitLetterStates() {
        let letterStates = {};
        for (let i = 0; i < this.proposedWord.length; i++) {
          let letter = this.proposedWord[i];
          if(this.getLetterClass(letter, i) != "absent"){
            let cls = this.getLetterClass(letter, i);
            letterStates[letter] = cls; // cls est l'état de la lettre ('correct', 'present', 'absent')
          }
        }
        this.$emit('letter-states', letterStates);
      },
    }
  };
</script>
  



  
  <style scoped>
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
  
  