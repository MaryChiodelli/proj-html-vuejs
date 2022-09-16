<template>
  <div class="quote row">
    <div class="col quote-content">
      <div class="detail">real stories</div>
      <q>I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great stydy portal for people like me.</q>
      <img src="../assets/testimonial-avata-02.jpg" alt="Mina Hollace">
      <div class="name">Mina Hollace</div>
      <div class="role">/ Freelancer</div>
    </div>
    <div class="col quote-image">
      <img src="../assets/home-movation-testimonial-image.jpg" alt="image">
    </div>
    <div class="controls">
      <img src="../assets/image.png" alt="ok">
      <span>1/4</span>
      <img src="../assets/image (1).png" alt="ok">
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuotesSection'
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

  .quote {
    position: relative;

    .controls {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 94px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: #fff;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      span {
        font-size: 17px;
        font-weight: 700;
      }
    }

    .col {
      width: 50%;
      height: 702px;
    }

    .quote-content {
      padding: 0 235px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      background-image: url('../assets/background-pattern-wavify.png');
      background-color: #F7F7FD;

      .detail {
        margin-bottom: 56px;
        color: $primary-color;
      }

      q {
        margin-bottom: 54px;
        font-size: 1.5rem;
        line-height: 40px;
      }

      img {
        width: 85px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin-bottom: 28px;
      }

      .name {
        margin-bottom: 1rem;
        font-size: 20px;
        line-height: 23px;
      }

      .role {
        font-size: 15px;
        line-height: 18px;
        color: $light-gray;
      }
    }

    .quote-image {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

  }
</style>