<template>
  <div class="card">
    <div class="card-image">
      <img :src="info.img" :alt="info.title">
      <ul class="tools">
        <li class="tool"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" /></li>
        <li class="tool"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon" /></li>
        <li class="tool"><font-awesome-icon icon="fa-regular fa-heart" class="icon" /></li>
        <li class="tool mb-0"><font-awesome-icon icon="fa-solid fa-signal" class="icon" /></li>
      </ul>
    </div>
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

    .card-image {
      margin-bottom: 21px;
      position: relative;
      overflow: hidden;

      .tools {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        opacity: 0;

        .tool {
          width: 40px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          margin-bottom: 10px;

          display: flex;
          justify-content: center;
          align-items: center;
          
          background-color: #fff;

          .icon {
            font-size: 1rem;
            width: 1rem;
          }
        }

        .mb-0 {
          margin-bottom: 0;
        }
        
      }
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

    &:hover {
      img {
        transform: scale(1.1);
      }

      .tools {
        opacity: 1;
      }
    }
  }
</style>
