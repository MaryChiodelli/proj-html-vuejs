<template>
  <div class="sponsors">
    <div class="container row">
      <div v-for="(sponsor, index) in sponsors" :key="index" class="col-2">
        <img :src="sponsor.img" :alt="sponsor.alt">
      </div>
    </div>
  </div>
</template>

<script>
import {sponsors} from '../maxcoach';

export default {
  name: 'SponsorsSection',
  data(){
    return {
      sponsors
    }
  }
}
</script>

<style lang="scss" scoped>
  .sponsors {
    padding: 107px 0 150px;

    .row {
      align-items: center;
    }

    .col-2 {
      width: calc(100% / 6);

      img {
        margin: 0 auto;
        opacity: 0.2;
      }
    }
  }
</style>
