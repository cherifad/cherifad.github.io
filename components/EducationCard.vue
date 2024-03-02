<template>
    <div>
        <div class="flex flex-col lg:flex-row md:text-2xl text-lg gap-4 text-[#969696] font-normal">
            <span
                class="w-fit py-[2px] px-4 hover:text-[#1e1e20] hover:bg-[#969696] rounded-full border-2 border-[#969696]">
                {{ year }}
            </span>
            <span
                class="w-fit py-[2px] px-4 hover:text-[#1e1e20] hover:bg-[#969696] md:rounded-full rounded-3xl border-2 border-[#969696]">
                {{ place }}
            </span>
        </div>
        <div class="bg-[#373737] rounded-3xl mt-2 p-12 md:text-4xl text-2xl font-bold text-white uppercase">
            {{ title }}
            <ul v-for="(keyInfo, index) in keysInformations" :key="index" class="text-[#969696] md:text-2xl text-lg font-light mt-2">
                <li class="flex items-center gap-2">
                    <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
                    {{ keyInfo }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    year: String,
    place: String,
    keysInformations: Array<String>
})
</script>

<style scoped>
span {
    transition: all 0.3s;
}
</style>