<template>
  <a class="button" href="#">
    <span class="button-label">{{ label }}</span>
    <font-awesome-icon v-if="icon" icon="fa-solid fa-arrow-right" size="sm" class="button-icon" />
  </a>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    label: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.button {
  padding: 0 1.5rem;
  border-radius: 4px;

  display: inline-block;
  background-color: $primary-color;

  color: #fff;
  text-align: center;

  .button-label {
    display: inline-block;
    line-height: 52px;
    font-size: 14px;
    font-weight: 700;
  }

  .button-icon {
    margin-left: 12px;
  }
}
</style>
