<template>
  <div class="card">
    <img :src="info.img" :alt="info.title">
    <h3>{{ info.title }}</h3>
    <div class="price">
      $<span class="euro">{{ price.euro }}</span><span class="cents">.{{ price.cents }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    info: Object
  },
  computed: {
    price() {
      const price = this.info.price.split('.');
      return {
        euro: price[0],
        cents: price[1]
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

  .card {
    text-align: center;

    img {
      margin-bottom: 21px;
    }

    h3 {
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 700;
      line-height: 160%;
      color: $brand-color;
    }
    
    .price {
      color: $primary-color;
      font-size: 25px;
      font-weight: 700;

      .cents {
        font-size: 19px;
      }
    }
  }
</style>
