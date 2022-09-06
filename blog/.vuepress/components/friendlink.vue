<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const links = ref([]);

onBeforeMount(async () => {
  links.value = await fetch("/assets/links.json")
      .then((res) => res.json())
      .then((data) => data.links);
});
</script>

<template>
  <transition-group id="linksGrid" name="link" tag="div">
    <div v-for="{ id, name, link, icon, desc } of links" :key="id" class="friendLink">
      <img :alt="`${name}-${desc}`" :src="icon" class="icon"/>
      <a :href="link">
        <p class="name">{{ name }}</p>
        <p>{{ desc }}</p>
      </a>
    </div>
  </transition-group>
</template>

<style lang="scss" scoped>
#linksGrid {
  display: grid;
  gap: 1vh 0.7vw;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));

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

.link-enter-active {
  transition: all 0.5s ease;
}

.link-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
