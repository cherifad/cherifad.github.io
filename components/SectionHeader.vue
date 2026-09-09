<template>
    <div class="mb-8">
        <h1 class="lg:text-8xl sm:text-6xl text-4xl text-[#dadada] font-normal uppercase mb-2">
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