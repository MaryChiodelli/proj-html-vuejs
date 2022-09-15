<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col hero-content">
            <div class="detail">I'm wingman</div>
            <h1 class="title">Peace On Earth A Wonderful Wish But No Way</h1>
            <p class="description">Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
            <a class="button" href="#">
              <span class="button-label">Get Started For Free</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </a>
          </div>
          <div class="col hero-image">
            <img src="../assets/home-movation-hero-image.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style lang="scss" scoped>
  .hero {
    padding-top: 80px;
    margin-top: -80px;
    background-image: url('../assets/background-pattern-wavify.png');
    background-color: #F7F7FD;

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

      .button {
        padding: 18px 50px;
        border-radius: 4px;
        margin-bottom: 1rem;
        display: inline-block;
        background-color: #20ac97;
        color: #fff;
        font-size: 14px;
        font-weight: 700;

        .button-label {
          margin-right: 12px;
        }
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