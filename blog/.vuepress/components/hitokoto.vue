<script lang="ts" setup>
import { ref } from "vue";

const hitokoto = ref("");
const count = ref(0);

async function fetchHitokoto() {
  hitokoto.value = await fetch("https://v1.hitokoto.cn/")
      .then((res) => res.json())
      .then((data) => data.hitokoto)
      .catch((e) => `你点的太快了：${e}`) as string;
  count.value++;
}

fetchHitokoto();
</script>

<template>
  <blockquote>
    <Transition mode="out-in" name="hitokoto">
      <p v-if="count % 2 !== 0" :title="`这已经是你第 ${count} 次刷新一言了！`" @click="fetchHitokoto">
        {{ hitokoto }}
      </p>
      <p v-else :title="`这已经是你第 ${count} 次刷新一言了！`" @click="fetchHitokoto">{{ hitokoto }}</p>
    </Transition>
  </blockquote>
</template>

<style scoped>
.hitokoto-enter-active,
.hitokoto-leave-active {
  transition: all 0.4s ease-out;
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
