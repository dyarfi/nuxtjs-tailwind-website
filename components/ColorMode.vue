<template>
  <div>
    <select v-model="$colorMode.preference" class="color-mode">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>

<style lang="postcss">
/* body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
} */
.dark-mode {
  /* body {
    background-color: #091a28;
    color: #ebf4f1;
  } */
  .color-mode {
    option {
      @apply text-gray-900;
    }
  }
}
/* .sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
} */
</style>
