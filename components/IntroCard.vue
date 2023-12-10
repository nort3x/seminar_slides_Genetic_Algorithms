<template>
  <div class="h-full w-full rounded-[12px] p-3 mt-[0px]"
       style="background: rgba(0,0,0,0.4); box-shadow: 0 0 20px 1px black; backdrop-filter: blur(3px)">
    <div class="flex flex-col w-full justify-between gap-[3rem] p-3">
      <div class="flex flex-col gap-[0.5rem]">
        <h2 class="w-full !text-[40px]">
          <span class="acronom">E</span>volutionary <span class="acronom">A</span>lgorithms
        </h2>
        <h3 class="w-full">
          A toolkit for tackling non-convex optimization
        </h3>
      </div>
      <div class="flex flex-row justify-between items-end">
        <table style="max-width: 40%">
          <tr>
            <td class="text-[orange]">Author</td>
            <td>Hooman Ardaki</td>
          </tr>
          <tr>
            <td class="text-[orange]">Supervisor</td>
            <td>Dr. S.M Vaez Allaei</td>
          </tr>
        </table>

        <table class="max-w-[15%] leading-[10px] ">
          <tr class="text-center text-[0.75rem]">
            <td>December 2023</td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.acronom {
  @apply text-[40px];
  font-weight: 1000;
  color: orange;
}
</style>