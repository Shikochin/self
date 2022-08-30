<script setup lang="ts">
import { ref, onMounted } from 'vue'

const links = ref([])

onMounted(async () => {
  links.value = await fetch('/assets/links.json')
    .then(res => res.json())
    .then(data => data.links)
})
</script>

<template>
  <div id="linkGrid">
    <div class="friendLink" v-for="{ name, link, icon, desc } of links" :key="name">
      <img class="webIcon" :alt="`${name}-${desc}`" :src="icon" />
      <a :href="link">
        <p class="nameAndDesc">{{  name  }}<br />{{  desc  }}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1000px) {
  #linkGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }
}

@media screen and (max-width: 1000px) {
  #linkGrid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }
}

.webIcon {
  width: 128px;
  height: 128px;
  border-radius: 100%;
  margin-right: 0.8vw;
}

.friendLink {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: var(--friendlink-height);
  border-radius: var(--friendlink-border-radius);
  border-color: var(--friendlink-border-color);
  border-style: dotted;
}

.nameAndDesc {
  font-size: var(--friendlink-fontsize);
  font-weight: bold;
}
</style>