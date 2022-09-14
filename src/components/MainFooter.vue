<template>
  <footer>
    <div class="container footer-meta">
      <div class="col">
        <h4>Address</h4>
        <ul>
          <li>382 NE 191st St # 87394 Miami, FL 33279-3899</li>
          <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
          <li><a href="#">support@Maxcoach.com</a></li>
        </ul>
        
        <ul class="social-list">
          <li>
            <font-awesome-icon icon="fa-brands fa-square-facebook" class="social-icon" />
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
        <FooterLinks :links="links2" class="pt" />
        <FooterLinks title="Information" :links="links3" />
      </div>

    </div>
    <div class="container footer-privacy">
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
    color: #8B8B90;
    font-size: 14px;
    font-weight: 700;
  }

  .footer-meta {
    display: flex;
    padding-top: 65px;

    h4 {
      font-size: 20px;
      color: #fff;
      margin-bottom: 9px;
    }

    li {
      line-height: 250%;
    }
  }

  .footer-privacy {
    padding: 80px 0 56px;
    text-align: center;
  }

  .nav-links {
    display: flex;
    gap: 65px;
  }

  .col {
    width: 50%;
  }


  .social-list {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .social-icon {
    display: block;
    height: 24px;
    aspect-ratio: 1 / 1;
  }

  .pt {
    padding-top: 35px;
  }
</style>