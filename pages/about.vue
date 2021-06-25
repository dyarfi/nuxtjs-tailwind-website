<template>
  <div class="lg:container mx-auto my-12">
    <div class="row">
      <div class="col-12 mb-4 shadow-lg hover:shadow-xl">
        <figure class="md:flex bg-gray-100 p-8 md:p-0">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-gray-200"
            src="/sarah-dayan.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">Sarah Dayan</div>
              <div class="text-gray-500">Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div class="col-12 mb-4 shadow-lg hover:shadow-xl">
        <figure class="md:flex bg-gray-100 p-8 md:p-0">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-gray-200"
            src="/sarah-dayan.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">Sarah Dayan</div>
              <div class="text-gray-500">Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div class="col-12 mb-4 shadow-lg hover:shadow-xl">
        <figure class="md:flex bg-gray-100 p-8 md:p-0">
          <img
            class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-gray-200"
            src="/sarah-dayan.jpg"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">Sarah Dayan</div>
              <div class="text-gray-500">Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .where({ status: 'publish' })
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    // console.log(articles)
    return {
      articles,
      tags,
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
