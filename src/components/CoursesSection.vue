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
    .row {
      margin: 0 -15px;
    }
    .col {
      width: calc(100% / 3);
      min-height: 450px;
      padding: 0 15px;
      margin-bottom: 30px;
    }
  }

  .courses-footer {
    padding: 12px 0;
    text-align: center;

    .btn {
      width: 260px;
    }
  }
</style>