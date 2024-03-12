<template>
    <div class="w-full lg:w-1/2 xl:w-1/3 lg:px-4 pb-4 flex">
        <div id="card" class="py-6 px-8 rounded-3xl relative flex-1 flex flex-col justify-between">
            <img :src="image" alt="project image" class="w-full object-cover rounded-md mt-3 max-h-96" />
            <span class="text-sm bg-gray-200 px-2 py-1 rounded-md absolute top-10 left-10">{{ year }}</span>
            <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-2">
                    <h1 class="text-xl font-normal uppercase">{{ title }}</h1>
                    <p class="text-sm">{{ description }}</p>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                        <p class="text-sm underline text-nowrap">{{ $t('Section.Projects.Single.Details.Technologies') }}{{
                            $t('Ponctuation.Space') }}:</p>
                        <div class="flex flex-row gap-2 flex-wrap items-center">
                            <span v-for="(technology, index) in technologies" :key="index"
                                class="text-sm bg-gray-200 px-2 py-1 rounded-md flex items-center gap-1 hover:bg-gray-300">
                                <Icon :name="technology.icon" class="w-4 h-4" />
                                {{ technology.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <a :href="link" target="_blank">
                <Button class="mt-3 w-full" :text="$t('Section.Projects.Single.Details.SeeMore')" isBlack
                    icon="material-symbols:open-in-new" transition="top-right" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from './common/Button.vue';

defineProps({
    title: String,
    description: String,
    link: String,
    technologies: {
        type: Array as PropType<{ name: string, icon: string }[]>,
        required: true
    },
    image: String,
    year: String
})
</script>

<style scoped>
#card {
    background: linear-gradient(117deg, rgba(255, 255, 255, 1) 0%, rgba(221, 221, 221, 1) 35%);
}
</style>
