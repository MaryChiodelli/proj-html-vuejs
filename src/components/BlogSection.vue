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
@import '../style/variables';
  .blog-header {
    padding: 150px 0 61px;

    .detail {
      margin-bottom: 18px;
    }

    .title {
      font-family: $display-font;
      font-size: 40px;
      font-weight: 400;
      line-height: 53px;
    }
  }

  .blog-footer {
    text-align: center;
    padding-bottom: 144px;

    .link-wrapper {
      position: relative;

    }
    .link {
      display: inline-block;
      padding-bottom: 3px;
      border-bottom: 3px solid $primary-color;

      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      color: $primary-color;
    }
  }
</style>