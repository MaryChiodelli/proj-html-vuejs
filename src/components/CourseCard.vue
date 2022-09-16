<template>
  <div class="card">
    <div class="card-image">
      <img :src="info.img" :alt="info.title">
    </div>
    <div class="card-content">
      <div class="price">${{ info.price }}</div>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

  .card-image {
    width: 100%;
    height: 230px;

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
    }

    .title {
      margin-bottom: 33px;
      font-size: 20px;
      font-weight: 700;
      line-height: 160%;
    }

    .list-inline {
      display: flex;
      align-items: center;
      gap: 30px;

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
</style>
