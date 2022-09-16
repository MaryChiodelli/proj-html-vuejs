<template>
  <div class="card">
    <img :src="info.img" :alt="info.title">
    <div class="date">
      <font-awesome-icon icon="fa-regular fa-calendar" class="icon" />
      {{info.date}}
    </div>
    <h3>{{info.title}}</h3>
    <p>{{info.summary}}</p>
  </div>
</template>

<script>
export default {
  name:'ArticleCard',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';
  .card {
    min-height: 390px;

    img {
      width: 100%;
      height: 184px;
      border-radius: 0.5rem;
      margin-bottom: 31px;
      object-fit: contain;
    }

    .date {
      margin-bottom: 11px;
      font-size: 15px;
      line-height: 18px;
      color: $light-gray;

      .icon {
        margin-right: 10px;
        font-size: 1rem;
      }
    }

    h3 {
      margin-bottom: 17px;
      font-size: 20px;
      line-height: 160%;
      font-weight: 700;
    }

    p {
      font-size: 15px;
      line-height: 160%;
      color: $light-gray;
    }
  }
</style>