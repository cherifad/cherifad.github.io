<template>
    <div class="mt-16 flex flex-col gap-8">
      <SectionHeader :title="$t('Section.Education.Title')" :description="$t('Section.Education.Description')" />
      <EducationCard v-for="(education, index) in educations" :key="index" :title="education.title" :year="education.year" :place="education.place" :keysInformations="education.keysInformations" />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Education {
    title: string;
    year: string;
    place: string;
    keysInformations: Array<string>;
  }

  defineProps({
    educations: Array<Education>
  })  
  </script>