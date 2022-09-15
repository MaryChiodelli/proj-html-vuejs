<template>
  <section class="about">
    <div class="container about-content">
      <div class="detail">about me</div>
      <div class="row">
        <div class="col">
          <h2 class="title">How to Become an Alpha Male: The 15 Habits of True Alphas</h2>
        </div>
        <div class="col">
          <p class="intro">Whant to learn to be <span class="hilight">a alpha male</span>? How to be more masculine? How to be the man you've always wanted to be?</p>
          <p>Your goal is to show the conistency of business, core values, and customer care. Punctuality, responsability, intividuality, accuracy, enthusiasm - you have to clearly explain how these qualities are applicable to your work. And the important thing is you do love what you do.</p>
        </div>
      </div>
    </div>
    <div class="container row about-media">
      <div class="col media-video">
        <img src="../assets/home-movation-video-poster-670x450.jpg" alt="Video">
      </div>
      <div class="col media-quote">
        <q>Every morning you have two choices: continue to sleep whit your dreams, or wake up ad chase them.</q>
        <img src="../assets/home-movation-shape-01.png" alt="logo">
        <div class="name">Kaiaxa Stark</div>
        <div class="company">wingman</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

  .about-content {
    padding-top: 0.5rem;

    .detail {
      color: $primary-color;
      margin-bottom: 1.5rem;
    }

    .row {
      gap: 30px;
    }

    .col {
      flex-basis: 0;
      flex-grow: 1;
    }

    .title {
      width: 400px;
      font-size: 40px;
      line-height: 150%;
      font-weight: 400;
      font-family: $display-font;
    }

    .intro {
      font-size: 18px;
      line-height: 175%;
      margin-bottom: 1rem;

      .hilight {
        color: $primary-color;
      }
    }

    p {
      font-size: 15px;
      line-height: 160%;
    }
  }

  .about-media {
    padding: 100px 0;

    &.row {
      align-items: center;
    }

    .media-video{
      width: 670px;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .media-quote{
      width: calc(100% - 670px);
      padding: 0 85px;

      q {
        display: block;
        margin-bottom: 56px;
        font-size: 1.5rem;
        line-height: 45px;
        font-family: $display-font;
      }

      img {
        margin-bottom: 1.5rem;
      }

      .name {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 14px;
      }

      .company {
        font-size: 12px;
        text-transform: uppercase;
      }
    }
  }
</style>