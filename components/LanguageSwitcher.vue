<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n()

const toggleLanguage = (lang: string) => {
    locale.value = lang;
    setLocaleCookie(lang);
    document.documentElement.lang = lang;
}
</script>

<template>
    <div class="flex items-center space-x-2">
        <button :class="{
            'focus:outline-none transition-all': true,
            'opacity-50': locale !== 'en',
            'scale-125': locale === 'en',
        }" @click="toggleLanguage('en')" :aria-label="$t('LanguageSelector.Button.AriaLabel.English')">
            <Icon name="circle-flags:uk" class="w-6 h-6" />
        </button>
        <button :class="{
            'focus:outline-none transition-all': true,
            'opacity-50': locale !== 'fr',
            'scale-125': locale === 'fr',
        }" @click="toggleLanguage('fr')" :aria-label="$t('LanguageSelector.Button.AriaLabel.French')">
            <Icon name="circle-flags:fr" class="w-6 h-6" />
        </button>
    </div>
</template>
