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
    <h1 v-if="error?.statusCode" class="lg:text-8xl sm:text-6xl text-4xl text-[#dadada] font-normal uppercase">
      {{ error?.statusCode }}
    </h1>
    <p class="lg:text-4xl sm:text-3xl text-2xl text-center text-[#dadada] font-semibold">
      {{ $t('Error.Title') }}
    </p>
    <p class="lg:text-2xl sm:text-xl text-lg text-center text-[#dadada] font-light">
      {{ $t('Error.Message') }}
    </p>
    <p v-if="error?.statusMessage" class="lg:text-2xl sm:text-xl text-lg text-center text-[#dadada] font-light">
      --> {{ error?.statusMessage }} <-- </p>
        <div class="text-center lg:text-start w-full lg:w-fit">
          <Button class="w-full" :text="$t('Error.Button')" :isBlack="false" icon="mdi:arrow-top-right"
            transition="top-right" @click="handleError" />
        </div>
  </div>
</template>
