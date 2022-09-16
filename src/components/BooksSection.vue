<template>
  <section class="books">
    <div class="container">
      <div class="row">
        <div class="col w-40">
          <div class="detail">book store online</div>
          <h2 class="title">Be Alpha With <span class="hilight">Wingman's Book</span></h2>
          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" class="icon" />
              <span>Help you understand yourself better</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" class="icon" />
              <span>Revealing mature tips</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" class="icon" />
              <span>Give the right advice</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" class="icon" />
              <span>Fascinating examples of alphaman</span>
            </li>
          </ul>
          <ButtonComponent class="btn" label="Get Free Ebook" />
        </div>
        <div v-for="(book, index) in books" :key="index" class="col w-30">
          <BookCard :info="book" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import BookCard from './BookCard.vue';
import { books } from '../maxcoach';

export default {
  name: 'BooksSection',
  components: {
    ButtonComponent,
    BookCard
  },
  data() {
    return {
      books
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables';

  .books {
    padding: 58px 0;

    .detail {
      padding: 6px 0 14px;
    }

    .title {
      width: 340px;
      margin-bottom: 25px;
      font-size: 40px;
      line-height: 150%;
      font-weight: 400;
      font-family: $display-font;
      color: $brand-color;
    }

    ul {
      margin-bottom: 35px;
      font-size: 14px;
      color: $light-gray;

      li * {
        vertical-align: middle;
      }

      .icon {
        padding: 4px;
        margin-right: 10px;
        font-size: 1rem;
        color: $primary-color;
      }

      span {
        line-height: 250%;
        display: inline-block;
      }
    }

    .btn {
      width: 210px;
    }
  }

  .row {
    margin: 0 -15px;
  }

  .col {
    padding: 0 15px;
  }
</style>