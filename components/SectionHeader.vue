<template>
    <div class="md:flex lg:flex-wrap justify-between gap-12">
        <h1 class="md:text-8xl sm:text-6xl text-4xl text-[#dadada] font-normal uppercase">
            {{ title }}
        </h1>
        <p class="text-[#969696] md:text-2xl text-lg font-light">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String
})
</script>