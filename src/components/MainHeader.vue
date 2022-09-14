<template>
  <header>
    <div class="container">
      <img class="logo" src="../assets/dark-logo.png" alt="MaxCoach logo">
      <nav>
        <ul class="nav-list">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <a class="nav-link" href="link.href">{{link.text}}</a>
            <font-awesome-icon icon="fa-solid fa-angle-down" class="nav-icon" />
          </li>
        </ul>
      </nav>
      <ul class="social-list">
        <li>
          <font-awesome-icon icon="fa-brands fa-twitter" class="social-icon" />
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="social-icon" />
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-instagram" class="social-icon" />
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-linkedin" class="social-icon" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    links: Array
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 26px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 160px;
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .nav-link {
    margin-right: 6px;
    color: #3F3A64;
  }

  .nav-icon {
    width: 8px;
    aspect-ratio: 1 / 1;
  }

  .social-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .social-icon {
    display: block;
    height: 20px;
    aspect-ratio: 1 / 1;
  }
</style>