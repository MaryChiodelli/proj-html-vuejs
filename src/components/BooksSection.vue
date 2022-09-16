<template>
  <section class="books">
    <div class="container">
      <div class="row">
        <div class="col w-40">
        <div class="detail">book store online</div>
        <h2 class="title">Be Alpha With <span class="hilight">Wingman's Book</span></h2>
        <ul>
          <li>
            <font-awesome-icon icon="fa-regular fa-file-lines" size="1x" />
            <span>Help you understand yourself better</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-regular fa-file-lines" size="1x" />
            <span>Revealing mature tips</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-regular fa-file-lines" size="1x" />
            <span>Give the right advice</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-regular fa-file-lines" size="1x" />
            <span>Fascinating examples of alphaman</span>
          </li>
        </ul>
        <ButtonComponent label="Get Free Ebook" />
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
  .books {
    padding-top: 58px;
  }
  .row {
    margin: 0 -15px;
  }

  .col {
    padding: 0 15px;
  }
</style>