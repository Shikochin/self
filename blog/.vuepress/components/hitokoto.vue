<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const hitokoto = ref('')
const count = ref(0)
const tip = computed(() => `这已经是你第 ${count.value} 次刷新一言了！`)

async function fetchHitokoto() {
  hitokoto.value = await fetch("https://v1.hitokoto.cn/?c=a&c=d&c=i")
    .then(res => res.json())
    .then(data => data.hitokoto)
    .catch(e => e);
  count.value++
}

onMounted(() => {
  fetchHitokoto()
})

</script>

<template>
  <blockquote><span @click="fetchHitokoto" :title="tip">{{  hitokoto  }}</span></blockquote>
</template>