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
                <a href="#contact" class="text-center lg:text-start w-full lg:w-fit" >
                    <Button class="w-full" :text="$t('Home.Button.Contact')" isBlack icon="mdi:arrow-top-right" transition="top-right" />
                </a>
                <a :href="$t('CV.Path')" target="_blank" class="text-center lg:text-start w-full lg:w-fit" >
                    <Button class="w-full" :text="$t('Home.Button.Resume')" isBlack icon="mdi:download" transition="bottom" />
                </a>
            </div> 
            <div class="flex">
                <a href="https://github.com/cherifad" target="_blank" class="mr-4" :aria-label="$t('Home.Link.Icon.Github.AriaLabel')">
                    <Icon class="text-5xl" name="mdi:github" />
                </a>
                <a href="https://www.linkedin.com/in/adlen-cherif" target="_blank" :aria-label="$t('Home.Link.Icon.Linkedin.AriaLabel')">
                    <Icon class="text-5xl" name="mdi:linkedin" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/common/Button.vue';
</script>