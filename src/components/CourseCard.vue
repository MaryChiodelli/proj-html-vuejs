<template>
  <div class="card">
    <div class="card-image">
      <img :src="info.img" :alt="info.title">
    </div>
    <div class="card-content">
      <div class="price">
        $<span class="euro">{{ price.euro }}</span><span class="cents">.{{ price.cents }}</span>
      </div>
      <h3 class="title">{{ info.title }}</h3>
      <ul class="list-inline">
        <li>
          <font-awesome-icon icon="fa-regular fa-file-lines" size="1x" />
          <span v-if="info.lessons === 1">{{ info.lessons }} Lesson</span>
          <span v-else>{{ info.lessons }} Lessons</span>
        </li>
        <li>
          <font-awesome-icon icon="fa-regular fa-user" size="1x" />
          <span>{{ info.students }} Students</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
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
    min-height: 452px;
    border-radius: 0.5rem;
    overflow: hidden;

    &:hover {
      box-shadow: 0 14px 59px rgba(0, 0, 0, 0.12);

      img {
        transform: scale(1.1);
      }
    }

    .card-image {
      width: 100%;
      height: 230px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .card-content {
      padding: 26px 30px;

      .price {
        margin-bottom: 9px;
        color: $primary-color;
        font-size: 25px;
        font-weight: 700;

        .cents {
          font-size: 19px;
        }
      }

      .title {
        margin-bottom: 33px;
        font-size: 20px;
        font-weight: 700;
        line-height: 160%;
        color: $brand-color;
      }

      .list-inline {
        display: flex;
        align-items: center;
        gap: 30px;
        color: $light-gray;

        & * {
          vertical-align: middle;
        }

        span {
          margin-left: 0.5rem;
          display: inline-block;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
</style>
