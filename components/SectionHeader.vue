<template>
    <div class="flex justify-between">
        <h1 class="text-8xl ">
            {{ title }}
        </h1>
        <p>
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