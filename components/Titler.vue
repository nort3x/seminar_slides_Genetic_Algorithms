<template>

  <div class="mb-5 gap-2 flex flex-col w-full">
    <div class="flex flex-row w-full justify-between items-center">
      <h2 class="">
        <span class="animate-pulse">$</span>
        {{ props.title }}
      </h2>
      <div class="relative" style="height: fit-content" v-if="page">
        <div class="w-0 h-0 absolute inset-0 mx-auto my-auto" style="box-shadow: white 0 0 30px 5px"/>
        <p>{{ page }}</p>
      </div>
    </div>
    <hr/>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  page: Number
})
</script>

<style scoped>
</style>