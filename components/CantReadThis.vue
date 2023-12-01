<template>
  <div class="flex flex-col w-full gap-[0.5rem] items-center justify-center">
    <div style="z-index: 1; background: rgba(0,0,0,60%)" class="p-6 border rounded-[12px] shadow">
      <img src="/res/GA-Seminar-QRCode.svg" width="350" class="rounded-[10px]"/>
      <div class="flex flex-row gap-[0.5rem] items-center">
        <p class="text-[30px] font-bold">
          <span class="underline" style="text-underline-offset: 10px">Scan</span> if you can't read
        </p>
        <p class="text-[16px] p-3 bg-black border rounded">
          this
        </p>
      </div>
    </div>
    <img src="/res/spinning_dna_slow.gif" class="absolute rotate-[90deg] w-[100%]" style="z-index: 0;"/>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>