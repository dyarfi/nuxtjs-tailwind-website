<template>
  <div v-if="items && items.length > 0" class="lg:container mx-auto">
    <div class="boxed-bottom">
      <div
        v-for="(item, index) in items"
        :key="item.slug"
        class="boxed-bottom__right"
      >
        <div class="boxed-bottom-content xl:space-y-6" :rel="`card-${index}`">
          <div class="inline-block">
            <Nuxt-Link
              :to="{
                name: 'article-category-slug',
                params: { slug: item.category }
              }"
              class="boxed-bottom-link"
            >
              {{ item.category }}
            </Nuxt-Link>
          </div>
          <Nuxt-Link
            :to="{
              name: 'article-slug',
              params: { slug: item.slug }
            }"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="
                rounded-xl
                img-fluid
                box-shadow-img
                w-full
                object-cover
                h-44
              "
            />
          </Nuxt-Link>

          <h4 class="headline text-muted leading-tight mt-4">
            <Nuxt-Link
              :to="{
                name: 'article-slug',
                params: { slug: item.slug }
              }"
              >{{ item.title }}</Nuxt-Link
            >
          </h4>
          <!-- <div class="flex flex-row my-3 text-sm text-gray-500">
            <div class="flex-1">
              <font-awesome-icon :icon="['fa', 'clock']" />
              {{ $dateFns.format(item.createdAt, 'MMMM dd, yyyy') }}
            </div>
            <div class="flex-1">
              <span class="float-right text-muted">
                <font-awesome-icon :icon="['fa', 'user']" />
                <Nuxt-Link :to="`/article/author/${item.author.name}`">
                  {{ item.author.name }}</Nuxt-Link
                >
              </span>
            </div>
          </div> -->
          <p class="text-justify text-sm my-4 xl:my-3">
            {{ item.description.slice(0, 90) }}...
          </p>
          <!-- <div class="text-sm text-gray-500 mt-2 mb-4">
            <span>
              <font-awesome-icon :icon="['fa', 'tags']" />
            </span>
            <span v-for="(tag, i) in item.tags" :key="i" class="capitalize">              
              <Nuxt-Link :to="`/article/tag/${tag.replace(' ', '_')}`">
                {{ tag }}</Nuxt-Link
              >{{
                item.tags.length !== 1 && item.tags.length !== i + 1 ? ',' : ''
              }}
            </span>
          </div> -->
          <div>
            <Nuxt-Link
              :to="{
                name: 'article-slug',
                params: { slug: item.slug }
              }"
              class="btn btn-sm btn-default btn-hidden text-muted"
              ><span class="no-underline">read more</span>
              <span>
                &rarr;
                <!-- <font-awesome-icon :icon="['fa', 'arrow-right']"/> -->
              </span>
            </Nuxt-Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    items: { type: Array, required: true, default: () => [] }
  }
  // computed: {
  //   fas() {
  //     return fas
  //   }
  // }
}
</script>
