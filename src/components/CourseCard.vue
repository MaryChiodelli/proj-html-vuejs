<template>
  <div class="card">
    <img :src="info.img" :alt="info.title">
    <div>{{ info.price }}</div>
    <h3>{{ info.title }}</h3>
    <ul>
      <li>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
        <span v-if="info.lessons === 1">{{ info.lessons }} Lesson</span>
        <span v-else>{{ info.lessons }} Lessons</span>
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
        <span>{{ info.students }} Students</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
