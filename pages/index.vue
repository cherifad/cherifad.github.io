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

definePageMeta({
  layout: 'home'
})
</script>