<template>
  <div class="flex flex-col h-full w-full justify-center items-center" style="transform: scale(110%)">
    <div class="h-full w-[50%] rounded-[12px] p-3 mt-[230px] border"
         style="background: rgba(0,0,0,0.8); box-shadow: 0 0 10px 2px black; backdrop-filter: blur(3px); font-family: 'DejaVu Sans Mono'">
      <div class="flex flex-col w-full justify-between gap-[1rem] p-3">
        <div class="flex flex-col items-end">
          <p class="w-full text-center">“Explore everything; keep the best.”</p>
          <span class="text-[12px] mr-4" style="color: #949494"> - John Evelyn</span>
        </div>
        <button class="w-fit p-2 rounded text-center border self-center mt-3" @click="popConfetti($event)">Thank you</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {confetti} from "tsparticles-confetti";

function popConfetti(e) {
  confetti('confetti1', {
    position: {
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    }
  })
}
</script>

<style scoped>
</style>