<template>
    <HeadComponent />
    <div class="lg:px-16 px-9">
      <ContactForm />
    </div>
</template>

<script setup lang="ts">
import HeadComponent from "@/components/Head.vue";

definePageMeta({
  layout: 'home'
})

</script>