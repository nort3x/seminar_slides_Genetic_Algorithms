<template>
  <div class="relative">
    <transition name="fade">
      <div v-show="show" style="z-index: 0; margin-top: -450px" :id="plotId" class="top-[10%] rounded"/>
    </transition>
    <button class="px-1 border rounded" style="z-index: 10" @click="show =! show">example</button>
  </div>
</template>

<script setup lang="js">
import {onMounted, ref} from "vue"
import Plotly from "plotly.js-dist"

const id = Math.random()
const plotId = 'plot-' + id
const show = ref(false)

onMounted(() => {
  let exp = "1 - Math.sin(x-3)/(x-3)"

// Generate values
  const xValues = [];
  const yValues = [];
  for (let x = -20; x <= 20; x += 0.2) {
    xValues.push(x);
    yValues.push(eval(exp));
  }

// Display using Plotly
  const data = [{x: xValues, y: yValues, mode: "lines"}, {
    x: [1, 9],
    y: [1-Math.sin(1-3)/(1-3), 1-Math.sin(9-3)/(9-3)],
    type: 'scatter'
  }];
  const layout = {title: "y = " + exp};
  Plotly.newPlot(plotId, data, layout)
})

</script>

<style scoped>
</style>