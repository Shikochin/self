<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";

const links = ref([]);

onBeforeMount(async () => {
  links.value = await fetch("/assets/links.json")
      .then((res) => res.json())
      .then((data) => data.links);
});
</script>

<template>
  <div id="linksGrid">
    <div v-for="{ id, name, link, icon, desc } of links" :key="id" class="friendLink">
      <img :alt="`${name}-${desc}`" :src="icon" class="icon"/>
      <a :href="link">
        <p class="name">{{ name }}</p>
        <p>{{ desc }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#linksGrid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(1, 1fr);

  .friendLink {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
    height: var(--friendlink-height);
    border-radius: var(--friendlink-border-radius);
    border-color: var(--friendlink-border-color);
    border-style: double;
    padding-left: 30px;
    padding-right: 30px;

    .icon {
      width: 96px;
      height: 96px;
      border-radius: 100%;
      margin-right: 0.8vw;
    }

    .name {
      font-size: var(--friendlink-fontsize);
      font-weight: bold;
    }
  }
}

@media screen and (min-width: 1000px) {
  #linksGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
