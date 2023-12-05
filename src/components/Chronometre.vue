<template>
  <div>
    <div class="text-4xl font-bold flex justify-center">
      <span class="w-[80px] text-center">
        {{ ('0' + minutes).slice(-2) }}
      </span>
      <span>:</span>
      <span class="w-[80px] text-center">
        {{ ('0' + secondes).slice(-2) }}
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name : "Chronometre",
  computed: {
    minutes() {
      return this.$store.getters.getMinutes
    },
    secondes() {
      return this.$store.getters.getSecondes
    },
    chrono() {
      return this.$store.getters.getChrono
    }
  },
  mounted() {
    window.clearInterval(this.$store.getters.getChrono)
    this.$store.commit('restartChrono')
    const chrono = window.setInterval(() => {
      this.$store.dispatch('decrementChrono')
    }, 1000)
    this.$store.commit('setChrono', chrono)
  }
}
</script>


<style scoped>

</style>