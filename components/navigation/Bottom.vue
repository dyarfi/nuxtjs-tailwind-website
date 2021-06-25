<template>
  <div class="navigation-bottom inline mx-auto text-center">
    <div class="flex justify-center py-3">
      <nav>
        <ul class="flex items-center">
          <li class="mr-3"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="mr-3"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="mr-3"><NuxtLink to="/services">Services</NuxtLink></li>
          <li class="mr-3"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
      <p>
        Copyrights Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Debitis ipsa fugit quod velit!.
      </p>
    </div>
    <ColorMode />
  </div>
</template>

<script>
export default {
  props: {
    links: { type: Object, default: null },
  },
}
</script>

<style lang="postcss">
.nuxt-link-exact-active.nuxt-link-active {
  @apply text-red-600;
}
footer {
  @apply text-sm;
}
</style>
