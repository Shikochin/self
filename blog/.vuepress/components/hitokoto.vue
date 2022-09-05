<script lang="ts" setup>
import {computed, onBeforeMount, ref} from "vue";

const hitokoto = ref("");
const count = ref(0);
const tip = computed(() => `这已经是你第 ${count.value} 次刷新一言了！`);

async function fetchHitokoto() {
  hitokoto.value = await fetch("https://v1.hitokoto.cn/")
      .then((res) => res.json())
      .then((data) => data.hitokoto)
      .catch((e) => `你点的太快了：${e}`) as string;
  count.value++;
}

onBeforeMount(() => {
  fetchHitokoto();
});
</script>

<template>
  <blockquote>
    <Transition mode="out-in" name="hitokoto">
      <p v-if="count % 2 !== 0" :title="tip" @click="fetchHitokoto">
        {{ hitokoto }}
      </p>
      <p v-else :title="tip" @click="fetchHitokoto">{{ hitokoto }}</p>
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
