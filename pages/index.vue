<template>
    <HeadComponent />
    <div class="lg:px-16 px-9">
      <EducationSection :educations="educations" />
      <ContactSection />
    </div>
</template>

<script setup lang="ts">
import HeadComponent from "@/components/Head.vue";

definePageMeta({
  layout: 'home'
})

const educations = [
  {
    title: "Master's degree in Computer Science",
    year: "2019 - 2021",
    place: "University of Science and Technology Houari Boumediene",
    keysInformations: [
      "Specialized in Software Engineering",
      "Graduated with honors"
    ]
  },
  {
    title: "Bachelor's degree in Computer Science",
    year: "2016 - 2019",
    place: "University of Science and Technology Houari Boumediene",
    keysInformations: [
      "Specialized in Software Engineering",
      "Graduated with honors"
    ]
  }
]

</script>