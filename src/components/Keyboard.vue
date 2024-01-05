<template>
    <div :class="keyboardClass"></div>
  </template>
  
  <script>
  import Keyboard from "simple-keyboard";
  import "simple-keyboard/build/css/index.css";
  
  export default {
    name: "SimpleKeyboard",
    props: {
      keyboardClass: {
        default: "simple-keyboard",
        type: String
      },
      input: {
        type: String
      },
      keyStates: {
      type: Object,
      default: () => ({})
    }
    },
    data: () => ({
      keyboard: null
    }),
    mounted() {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress
      });
      this.$nextTick(() => {
        let buttonElement = this.keyboard.getButtonElement('A'); // Exemple : touche 'A'
        if (buttonElement) {
          buttonElement.classList.add('correct');
        }
      });
    },
    methods: {
      onChange(input) {
        this.$emit("onChange", input);
      },
      onKeyPress(button) {
        this.$emit("onKeyPress", button);
  
        if (button === "{shift}" || button === "{lock}") this.handleShift();
      },
      handleShift() {
        let currentLayout = this.keyboard.options.layoutName;
        let shiftToggle = currentLayout === "default" ? "shift" : "default";
  
        this.keyboard.setOptions({
          layoutName: shiftToggle
        });
      },
      updateKeyStyles(letterStates) {
        for (const [letter, newState] of Object.entries(letterStates)) {
          let buttonElement = this.keyboard.getButtonElement(letter);
          if (buttonElement) {
            // Continuer si la touche est déjà verte et le nouvel état est jaune
            if (buttonElement.classList.contains('correct') && newState === 'present') {
              continue;
            }

            // Mise à jour de la classe de la touche
            buttonElement.className = `hg-button ${newState}`;
          }
        }
      },
    },
    watch: {
      input(input) {
        this.keyboard.setInput(input);
      },
      keyStates: {
        immediate: true,
        handler(newStates) {
        if (this.keyboard) {
          this.updateKeyStyles(newStates);
          }
        }
      }
    }
  };
</script>
  

<style>

.hg-button.correct {
  background-color: green !important;
}

.hg-button.present {
  background-color: yellow !important;
}

.hg-button.absent {
  background-color: grey !important;
}
</style>
