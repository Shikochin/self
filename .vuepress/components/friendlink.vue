<script>
export default {
  props: ['name','link','icon','desc']
}
</script>

<template>
  <div class='friendLink'>
    <img class='webIcon' :src='icon' />
    <a :href='link'>
      <p class='nameAndDesc'>{{ name }}<br />{{ desc }}</p>
    </a>
  </div>
</template>