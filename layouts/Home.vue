<template>
    <slot />
    <Footer />
    <BackToTop />
</template>

<script setup lang="ts">
import Footer from '~/components/nav/Footer.vue';
import BackToTop from '~/components/common/BackToTop.vue';
</script>