
<script setup>
defineProps({
  path: String,
  img: String,
  title: String,
  tags: Object,
  date: String,
  author: String
});

function convertDate(date) {
  const da = new Date(date);
  return da.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>
<template>
  <article class="pt-8 mx-auto pb-2">
    <div
      class="flex items-center antialiased ml-2 transform transition duration-500 ease-in-out hover:scale-105"
    >
      <nuxt-link :to="path">
        <img
          :src="img"
          :alt="title"
          class="object-cover object-center rounded-lg shadow-md img"
        />

        <div class="relative px-4 -mt-16">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <ul>
                <li
                  v-for="tag in tags"
                  :key="tag"
                  class="inline-block bg-gray-200 rounded-full text-xs px-2 py-0.5 mr-2 mb-1 uppercase leading-relaxed"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>

            <h4 class="my-2 py-0 font-semibold leading-tight text-lg truncate">
              {{ title }}
            </h4>
            <div class="py-2 flex items-center leading-relaxed">
              <p class="px-2 text-sm">{{ convertDate(date) }} </p>
              <p class="h-1 w-1 rounded-full bg-gray-400 mx-1"></p>
              <p class="pl-2 text-base font-semibold">{{ author }}</p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </article>
</template>

<style>
.img {
  width: 400px;
  height: 250px;
}
</style>
