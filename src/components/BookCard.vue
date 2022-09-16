<template>
  <div class="card">
    <img :src="info.img" :alt="info.title">
    <h3>{{ info.title }}</h3>
    <div>{{ info.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
