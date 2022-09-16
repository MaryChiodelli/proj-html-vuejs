<template>
  <section class="blog">
    <div class="container blog-header">
      <div class="detail">blog updated</div>
      <h2 class="title">Interestig <span class="hilight">articles updated</span> daily</h2>
    </div>
    <div class="container blog-content">
      <div class="row">
        <div v-for="n in 4" :key="n" class="col">
          <ArticleCard />
        </div>
      </div>
    </div>
    <div class="container blog-footer">
      <a class="link" href="#">View all posts</a>
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  name: 'BlogSection',
  components: {
    ArticleCard
  }
}
</script>

<style lang="scss" scoped>

</style>