<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const links = ref([]);

onBeforeMount(async () => {
  links.value = await fetch("/assets/links.json")
    .then((res) => res.json())
    .then((data) => data.links);
});
</script>

<template>
  <div id="linksGrid">
    <div class="friendLink" v-for="{ id, name, link, icon, desc } of links" :key="id">
      <img class="icon" :alt="`${name}-${desc}`" :src="icon" />
      <a :href="link">
        <p class="name">{{ name }}</p>
        <p>{{ desc }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1000px) {
  #linksGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }
}

@media screen and (max-width: 1000px) {
  #linksGrid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }
}

.icon {
  width: 96px;
  height: 96px;
  border-radius: 100%;
  margin-right: 0.8vw;
}

.friendLink {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--friendlink-height);
  border-radius: var(--friendlink-border-radius);
  border-color: var(--friendlink-border-color);
  border-style: double;
  padding-left: 30px;
  padding-right: 30px;
}

.name {
  font-size: var(--friendlink-fontsize);
  font-weight: bold;
}
</style>
