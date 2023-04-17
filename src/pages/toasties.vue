<template>
  <Layout>
    <template #header>
      <AppBar title="Toasties" />
    </template>
    <div class="flex flex-wrap gap-8">
      <template v-for="toastie in toasties" :key="toastie.id">
        <div
          class="brw-card w-[360px] bg-red-400 rounded-[4mm] shadow aspect-[62/100] overflow-hidden font-toastie-body"
          :id="'toastie-' + toastie.id"
        >
          <div class="grid">
            <img
              :src="toastie.image"
              alt=""
              class="aspect-[62/44] w-full object-cover col-start-1 col-span-1 row-start-1 row-span-1"
            />
            <h2
              class="z-0 tracking-tighter text-[2rem] my-8 leading-1 col-start-1 col-span-1 row-start-1 row-span-1 font-toastie-heading text-white text-center uppercase"
            >
              #{{ toastie.id }} {{ toastie.name }}
            </h2>
          </div>
          <div class="px-8 font-semibold">
            <table class="rotate-[-3deg] w-full text-2xl text-white">
              <tr>
                <th class="text-left">Ooze</th>
                <td class="text-right text-yellow-300">{{ toastie.ooze }}</td>
              </tr>
              <tr>
                <th class="text-left">Quirk</th>
                <td class="text-right text-yellow-300">
                  {{ toastie.quirk }}
                </td>
              </tr>
              <tr>
                <th class="text-left">Structural Integrity</th>
                <td class="text-right text-yellow-300">
                  {{ toastie.structuralIntegrity }}
                </td>
              </tr>
              <tr>
                <th class="text-left">Political Correctness</th>
                <td class="text-right text-yellow-300">
                  {{ toastie.politicalCorrectness }}
                </td>
              </tr>
            </table>
            <table class="mt-8 table-fixed text-lg text-black">
              <tr>
                <th
                  class="text-left align-top uppercase whitespace-nowrap text-yellow-300"
                >
                  Involves
                </th>
                <td class="pl-8">
                  {{ toastie.involves[0] }}, {{ toastie.involves[1] }} &
                  {{ toastie.involves[2] }}
                </td>
              </tr>
              <tr>
                <th
                  class="text-left align-top uppercase whitespace-nowrap text-yellow-300"
                >
                  Tastes like
                </th>
                <td class="pl-8">{{ toastie.tastesLike }}</td>
              </tr>
            </table>
          </div>
        </div>
      </template>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const toasties = ref([]);

fetch("https://api.jsonbin.io/v3/b/63d926c2ebd26539d07114fa?meta=false")
  .then((r) => r.json())
  .then((r) => (toasties.value = r));
</script>

<style scoped>
h2 {
  -webkit-text-stroke: 1px theme("colors.black");
}
img {
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%);
}

#toastie-5 {
  background: #c00;
}
#toastie-27 {
  background: linear-gradient(
    to right,
    #000 0 33.33%,
    #c00 0 66.66%,
    #fc0 0 100%
  );
}
</style>