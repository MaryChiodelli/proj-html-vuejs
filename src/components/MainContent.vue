<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="row">
          <div class="col w-50">
            <div>I'm wingman</div>
            <h1>Peace On Earth A Wonderful Wish But No Way</h1>
            <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
            <a href="#">Get Started For Free</a>
          </div>
          <div class="col w-50">
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

    .container {
      padding-top: 125px;
    }
  }

  .w-50 {
    width: 50%;
  }
</style>