<template>
  <div class="section">
    <div class="container row">
      <div v-for="(statistic, index) in statistics" :key="index" class="col">
        <div class="data">{{ statistic.data }}</div>
        <div class="label">{{ statistic.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const statistics = [
  {
    data: '1.926',
    label: 'finished sessions'
  },
  {
    data: '100%',
    label: 'satisfaction rate'
  },
  {
    data: '3092+',
    label: 'enrolled learners'
  },
  {
    data: '200',
    label: 'online instructors'
  }
]

export default {
  name: 'StatisticsSection',
  data() {
    return {
      statistics
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/variables.scss';

  .section {
    padding: 125px 0;
  }
  .col {
    height: 96px;
    flex-basis: 0;
    flex-grow: 1;
    background-image: url('../assets/background-pattern-grid-line-06.png');
    text-align: center;
  }
  .data {
    margin-bottom: 1rem;
    font-size: 40px;
    font-weight: 700;
    color: $primary-color;
  }
  .label {
    font-size: 14px;
    line-height: 1rem;
    letter-spacing: 0.17em;
    color: $body-color;
    text-transform: uppercase;
  }
</style>