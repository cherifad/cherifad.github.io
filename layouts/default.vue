<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "~/components/nav/Header.vue";
import Footer from "~/components/nav/Footer.vue";

</script>
  