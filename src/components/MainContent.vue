<template>
  <main>
    <HeroSection />
    <StatisticsSection />
    <AboutSection />
    <CoursesSection />
    <BooksSection />
    <SponsorsSection />
    <QuotesSection />
    <BlogSection />
  </main>
</template>

<script>
import HeroSection from './HeroSection.vue';
import StatisticsSection from './StatisticsSection.vue';
import AboutSection from './AboutSection.vue';
import CoursesSection from './CoursesSection.vue';
import BooksSection from './BooksSection.vue';
import SponsorsSection from './SponsorsSection.vue';
import QuotesSection from './QuotesSection.vue';
import BlogSection from './BlogSection.vue';

export default {
  name: 'MainContent',
  components: {
    HeroSection,
    StatisticsSection,
    AboutSection,
    CoursesSection,
    BooksSection,
    SponsorsSection,
    QuotesSection,
    BlogSection
  }
}
</script>

<style lang="scss" scoped>
  
</style>