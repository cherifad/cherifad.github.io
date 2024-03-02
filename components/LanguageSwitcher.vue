<script setup lang="ts">
const { locale } = useI18n()

const toggleLanguage = (lang: string) => {
    locale.value = lang
}
</script>

<template>
    <div class="flex items-center space-x-2">
        <button :class="{
            'focus:outline-none transition-all': true,
            'opacity-50': locale === 'en',
            'scale-125': locale !== 'en',
        }" @click="toggleLanguage('en')">
            <Icon name="circle-flags:uk" class="w-6 h-6" />
        </button>
        <button :class="{
            'focus:outline-none transition-all': true,
            'opacity-50': locale === 'fr',
            'scale-125': locale !== 'fr',
        }" @click="toggleLanguage('fr')">
            <Icon name="circle-flags:fr" class="w-6 h-6" />
        </button>
    </div>
</template>
