<template>
  <div>
    <chronometre/>
  </div>
</template>

<script >
import Chronometre from "@/components/Chronometre.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name : "Jeu",
  components: {Chronometre}
})

</script>



<style scoped>

</style>