<script>
export default {
  data() {
    return {
      hitokoto: "",
    };
  },
  methods: {
    async fetchHitokoto() {
      fetch("https://v1.hitokoto.cn/?c=a&c=d&c=i")
        .then((res) => res.json())
        .then((data) => {
          this.hitokoto = data.hitokoto;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.fetchHitokoto();
  },
};
</script>

<template>
  <p @click="fetchHitokoto" title="点击以刷新">{{ hitokoto }}</p>
</template>