<template>
  <main>
    <section class="hero">
      <div class="container">
        <ul class="tools">
          <li class="tool-icon"><font-awesome-icon icon="fa-solid fa-shapes" size="lg" /></li>
          <li class="tool-icon"><font-awesome-icon icon="fa-solid fa-circle-info" size="lg" /></li>
          <li class="tool-icon"><font-awesome-icon icon="fa-solid fa-book" size="lg" /></li>
          <li class="tool-icon mb-0"><font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" /></li>
        </ul>
        <div class="row">
          <div class="col hero-content">
            <div class="detail">I'm wingman</div>
            <h1 class="title">Peace On Earth A Wonderful Wish But No Way</h1>
            <p class="description">Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
            <ButtonComponent class="btn" label="Get started For Free" icon="true" />
          </div>
          <div class="col hero-image">
            <img src="../assets/home-movation-hero-image.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <StatisticsSection />
    <AboutSection />
    <CoursesSection />
    <BooksSection />
    <SponsorsSection />
  </main>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import StatisticsSection from './StatisticsSection.vue';
import AboutSection from './AboutSection.vue';
import CoursesSection from './CoursesSection.vue';
import BooksSection from './BooksSection.vue';
import SponsorsSection from './SponsorsSection.vue';

export default {
  name: 'MainContent',
  components: {
    ButtonComponent,
    StatisticsSection,
    AboutSection,
    CoursesSection,
    BooksSection,
    SponsorsSection
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    padding-top: 80px;
    margin-top: -80px;
    background: url('../assets/home-movation-shape-face-600x534.png') right 20% bottom -30%  no-repeat,
                url('../assets/background-pattern-wavify.png');
    background-color: #F7F7FD;

    .tools {
      padding: 10px;
      border-radius: 4px 0 0 4px;
      position: absolute;
      top: 200px;
      right: 0;
      background-color: #fff;
      box-shadow: -3px 0 10px -2px rgb(0 0 0 / 10%);
      text-align: center;

      .tool-icon {
        margin-bottom: 18px;
      }

      .mb-0 {
        margin-bottom: 0;
      }
    }

    .row {
      align-items: center;
      min-height: 710px;
    }

    .hero-content {
      width: 440px;

      .detail {
        margin-bottom: 18px;
        font-size: 14px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .title {
        margin-bottom: 24px;
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 56px;
      }

      .description {
        margin-bottom: 34px;
        font-size: 14px;
        line-height: 215%;
      }

      .btn {
        width: 280px;
      }
    }

    .hero-image {
      flex-grow: 1;
      align-self: flex-end;

      img {
        display: block;
        float: right;
      }
    }
  }
</style>