<template>
  <div>
    <h4 v-if="title">{{title}}</h4>
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
  h4 {
    margin-bottom: 12px;
    font-size: 20px;
    color: #fff;
  }
  a {
    line-height: 250%;
  }
</style>