<template>
  <div class="navigation-bottom inline mx-auto text-center">
    <div class="flex justify-center py-3">
      <p>All right reserved &copy; 2021.</p>
    </div>
    <div class="block container mx-auto">
      <ColorMode />
      <!-- <Languages class="my-3 block" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: { type: String, default: '' }
  }
}
</script>
