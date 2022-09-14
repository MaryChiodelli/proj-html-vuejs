<template>
  <header>
    <div class="container">
      <img src="../assets/dark-logo.png" alt="Max Coach logo">
      <nav>
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <a href="link.href">{{link.text}}</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
const links = [
  {
    text: 'Home',
    href: '#'
  },
          {
    text: 'Pages',
    href: '#'
  },
  {
    text: 'Courses',
    href: '#'
  },
  {
    text: 'Blog',
    href: '#'
  },
  {
    text: 'Shop',
    href: '#'
  }
];

export default {
  name: 'MainHeader',
  data() {
    return {
      links
    }
  }
}
</script>

<style lang="scss" scoped>

</style>