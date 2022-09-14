<template>
  <footer>
    <div class="container row">
      <div class="col">
        <h4>Address</h4>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        
        <ul class="social-list">
          <li>
            <font-awesome-icon icon="fa-brands fa-square-facebook" />
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-twitter" class="social-icon" />
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" class="social-icon" />
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-linkedin" class="social-icon" />
          </li>
        </ul>
      </div>

      <div class="col nav-links">
        <FooterLinks title="Explore" :links="links1" />
        <FooterLinks :links="links2" />
        <FooterLinks title="Information" :links="links3" />
      </div>

    </div>
    <div class="container privacy">
      <p>&copy; 2020 Maxcoach, All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
import FooterLinks from './FooterLinks.vue';

const links1 = [
  {
    text: 'Start here',
    href: '#'
  },
  {
    text: 'Blog',
    href: '#'
  },
  {
    text: 'About us',
    href: '#'
  }
];
const links2 = [
  {
    text: 'Success story',
    href: '#'
  },
  {
    text: 'Courses',
    href: '#'
  },
  {
    text: 'Contact us',
    href: '#'
  }
];
const links3 = [
  {
    text: 'Membership',
    href: '#'
  },
  {
    text: 'Purchase guide',
    href: '#'
  },
  {
    text: 'Privacy policy',
    href: '#'
  },
  {
    text: 'Terms of service',
    href: '#'
  }
];

export default {
  name: 'MainFooter',
  components: {
    FooterLinks
  },
  data() {
    return {
      links1,
      links2,
      links3
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    background-color: #171520;
    color: #fff;
  }

  .nav-links {
    display: flex;
    gap: 65px;
  }

  .col {
    width: 50%;
  }

  .privacy {
    text-align: center;
  }
</style>