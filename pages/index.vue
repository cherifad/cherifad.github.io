<template>
  <HeadComponent />
  <div class="lg:px-16 px-9">
    <EducationSection id="edu" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import HeadComponent from "@/components/Head.vue";

const { locale } = useI18n()

definePageMeta({
  layout: 'home'
})

useHead({
  title: 'Adlen CHERIF | Full Stack Developer',
  titleTemplate: '%s',
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  title: 'Adlen CHERIF | Full Stack Developer',
  description: 'I am a Full Stack Developer based in Paris, France. I am passionate about building web applications and solving problems.',
  ogTitle: 'Adlen CHERIF | Full Stack Developer',
  ogDescription: 'I am a Full Stack Developer based in Paris, France. I am passionate about building web applications and solving problems.',
  ogImage: '/img/seoHome.png',
  twitterCard: 'summary_large_image'
})
</script>