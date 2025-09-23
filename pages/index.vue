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

const { locale, t } = useI18n()

definePageMeta({
  layout: 'home'
})

useHead({
  title: t('Seo.Home.Title'),
  titleTemplate: '%s',
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  title: t('Seo.Home.Title'),
  description: t('Seo.Home.Description'),
  ogTitle: t('Seo.Home.OgTitle'),
  ogDescription: t('Seo.Home.OgDescription'),
  ogImage: t('Seo.Home.OgImage'),
  twitterCard: 'summary_large_image'
})
</script>