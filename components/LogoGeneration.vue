<template>
  <div class="h-[70%]" >
    <video controls class="h-[100%]" @timeupdate="updateRate($event)">
      <source src="/res/thread-movie.mp4"/>
    </video>
    <p class="w-full" style="margin-left: 120px">{{currentGeneration}}</p>
  </div>
</template>

<script setup>
import {ref} from "vue";

const currentGeneration = ref('generation 0')
function updateRate(e){
  const progress = (e.target.currentTime / e.target.duration);
  currentGeneration.value = `generation ${Math.ceil(progress * 240)}`
}
</script>

<style scoped>
</style>