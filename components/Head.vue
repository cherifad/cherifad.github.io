<template>
    <div id="head" class="min-h-[80vh] rounded-b-3xl px-16">
        <Header />
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/nav/Header.vue";
</script>

<style>
#head {
    background: linear-gradient(117deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 35%);
}
</style>