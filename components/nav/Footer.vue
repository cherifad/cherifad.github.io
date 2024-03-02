<template>
    <footer class="my-8 lg:px-16 px-9">
        <div class="lg:flex justify-between border-t-[1px] py-8 text-[#969696] font-bold">
            <div class="flex-1 hidden lg:block">Adlen CHERIF</div>
            <div class="flex flex-col gap-4 items-center">
                <p class="flex flex-wrap justify-center">
                    Design{{ $t('Ponctuation.Space') }}: &nbsp;<a href="https://dribbble.com/Adhiari_is" target="_blank" class="flex items-center">Adhiari
                        Subekti
                        <Icon class="text-xl" name="material-symbols:open-in-new" />
                    </a>&nbsp; via &nbsp;<a
                        href="https://dribbble.com/shots/18963472-Digitaly-Digital-Marketing-Agency-Landing-Page-Website"
                        target="_blank" class="flex items-center">Dribbble
                        <Icon class="text-xl" name="material-symbols:open-in-new" />
                    </a>
                </p>
                <p class="flex">
                    {{ $t('Footer.Credits.Icons') }}{{ $t('Ponctuation.Space') }}: &nbsp; <a href="https://nuxt.com/modules/icon" target="_blank"
                        class="flex items-center">
                        Nuxt Icon
                        <Icon class="text-xl" name="material-symbols:open-in-new" />
                    </a>
                </p>
                <p class="flex">
                    {{ $t('Footer.Credits.Sources') }}{{ $t('Ponctuation.Space') }}: &nbsp;
                    <a href="https://github.com/cherifad/cherifad.github.io" target="_blank" class="flex items-center">
                        Github
                        <Icon class="text-xl" name="material-symbols:open-in-new" />
                    </a>
                </p>
            </div>
            <div class="font-normal flex-1 items-center mt-3 lg:mt-0 flex flex-col lg:items-end gap-3">
                <p>{{ currentYear }} | made with ❤️ by me</p>
                <LanguageSwitcher />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>