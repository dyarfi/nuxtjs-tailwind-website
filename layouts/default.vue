<template>
  <div>
    <NavigationTop :items="storeMenus" />
    <main>
      <Header />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      storeMenus: (state) => state.menus
    })
  }
}
</script>

<style lang="postcss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
  nav {
    @apply bg-gray-800;
  }
  blockquote,
  figcaption {
    @apply text-gray-800;
  }
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
