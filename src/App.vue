<template>
  <div id="app">
    <MainHeader :links="links" />
    <MainContent />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainContent from './components/MainContent.vue';
import MainFooter from './components/MainFooter.vue';

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
  name: 'App',
  components: {
    MainHeader,
    MainContent,
    MainFooter
  },
  data() {
    return {
      links
    }
  }
}
</script>

<style lang="scss">
@import './style/general.scss';
</style>
