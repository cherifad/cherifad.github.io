<script setup lang="ts">
import type { NuxtError } from "#app";
import Button from '@/components/common/Button.vue';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen gap-4">
    <h1
      class="lg:text-8xl sm:text-6xl text-4xl text-[#dadada] font-normal uppercase"
    >
      {{ error?.statusCode }}
    </h1>
    <p class="lg:text-2xl sm:text-xl text-lg text-center text-[#dadada] font-light">
      {{ error?.statusMessage || "An unexpected error has occurred." }}
    </p>
    <a href="#contact" class="text-center lg:text-start w-full lg:w-fit">
      <Button
        class="w-full"
        text="Clear Error & Go Home"
        :isBlack="false"
        icon="mdi:arrow-top-right"
        transition="top-right"
        @click="handleError"
      />
    </a>
  </div>
</template>
