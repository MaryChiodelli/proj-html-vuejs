<template>
  <div>
    <h4>{{title}}</h4>
    <ul v-for="(link, index) in links" :key="index">
      <li><a href="link.href">
        {{link.text}}
      </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    title: String,
    links: Array
  }
}
</script>

<style lang="scss" scoped>

</style>