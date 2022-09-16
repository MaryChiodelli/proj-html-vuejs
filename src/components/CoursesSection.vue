<template>
  <section class="courses">
    <div class="container courses-header">
      <div class="detail">begin you journey at maxcoach</div>
      <h2 class="title">Last <span class="hilight">Online Courses</span></h2>
    </div>
    <div class="container courses-content">
      <div class="row">
        <div v-for="(course, index) in courses" :key="index" class="col">
          <CourseCard :info="course" />
        </div>
      </div>
    </div>
    <div class="container courses-footer">
      <ButtonComponent class="btn" label="Wiew all courses" icon="true" />
    </div>
  </section>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
import CourseCard from './CourseCard.vue';
import courses from '../maxcoach';

export default {
  name: 'CoursesSection',
  components: {
    ButtonComponent,
    CourseCard
  },
  data() {
    return {
      courses
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

  .courses-header {
    padding: 60px 0 65px;
    text-align: center;

    .detail {
      margin-bottom: 20px;
    }

    .title {
      font-size: 48px;
      font-family: $display-font;
      font-weight: 400;
    }

    .hilight {
      color: $primary-color;
    }
  }

  .courses-content {
    .col {
      width: calc(100% / 3);
    }
  }

  .courses-footer {
    text-align: center;

    .btn {
      width: 260px;
    }
  }
</style>