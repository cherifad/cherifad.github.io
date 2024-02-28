<template>
    <div class="flex-1 flex justify-between my-16">
        <div class="hidden lg:block flex-1">
            <div class="font-semibold flex flex-col text-9xl">
                <span class="lin-grad">
                    ADLEN
                </span>
                <span class="lin-grad">
                    CHERIF
                </span>
            </div>
        </div>
        <div class="text-2xl lg:w-5/12">
            <p class="font-light mb-6">
                {{ $t('Home.Content') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-2 justify-evenly mb-6">
                <Button class="text-center lg:text-start w-full lg:w-fit" text="Contact me" isBlack icon="mdi:arrow-top-right" transition="top-right" />
                <Button class="text-center lg:text-start w-full lg:w-fit" text="Download CV" isBlack icon="mdi:download" transition="bottom" />
            </div> 
            <div class="flex">
                <a href="https://github.com/cherifad" target="_blank" class="mr-4">
                    <Icon class="text-5xl" name="mdi:github" />
                </a>
                <a href="https://www.linkedin.com/in/adlen-cherif" target="_blank">
                    <Icon class="text-5xl" name="mdi:linkedin" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/common/Button.vue';
</script>