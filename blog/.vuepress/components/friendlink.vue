<script>
export default {
  props: ['name','link','icon','desc']
}
</script>

<template>
  <div class="friend-link">
    <img class="web-icon" :src="icon" />
    <a :href="link">
      <p class="name-and-desc">
        {{ name }}
        <br />
        {{ desc }}
      </p>
    </a>
  </div>
</template>