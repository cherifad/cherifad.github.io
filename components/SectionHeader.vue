<template>
    <div class="md:flex md:flex-wrap lg:flex-nowrap	justify-between gap-12 mb-8">
        <h1 class="lg:text-8xl sm:text-6xl text-4xl text-[#dadada] font-normal uppercase lg:w-1/2">
            {{ title }}
        </h1>
        <p class="text-[#969696] md:text-2xl text-lg font-light lg:w-1/2">
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