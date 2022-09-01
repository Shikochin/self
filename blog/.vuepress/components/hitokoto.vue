<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const hitokoto = ref('')
const count = ref(0)
const tip = computed(() => `这已经是你第 ${count.value} 次刷新一言了！`)

async function fetchHitokoto() {
  hitokoto.value = await fetch("https://v1.hitokoto.cn/?c=a&c=d&c=i")
    .then(res => res.json())
    .then(data => data.hitokoto)
    .catch(e => '你点的太快了！');
  count.value++
}

onMounted(() => {
  fetchHitokoto()
})

</script>

<template>
  <blockquote>
    <Transition name="hitokoto" mode="out-in">
      <p @click="fetchHitokoto" :title="tip" v-if="count % 2 !== 0">{{  hitokoto  }}</p>
      <p @click="fetchHitokoto" :title="tip" v-else>{{  hitokoto  }}</p>
    </Transition>
  </blockquote>
</template>

<style scoped>
.hitokoto-enter-active,
.hitokoto-leave-active {
  transition: all 0.5s ease-out;
}

.hitokoto-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.hitokoto-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>