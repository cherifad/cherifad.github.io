<template>
    <div id="head" class="lg:min-h-[40vh] min-h-[20vh] rounded-b-3xl lg:px-16 px-9 flex flex-col">
        <Header />
        <div class="flex-1 flex justify-between my-16">
            <div class="lg:w-2/3">
                <h1 class="lg:text-8xl sm:text-6xl text-4xl font-semibold uppercase lin-grad">
                    {{ $t('Thanks.Title') }}
                </h1>
                <p class="md:text-2xl lg:w-11/12 font-light">
                    {{ $t('Thanks.Message') }}
                </p>
                <a class="mt-8 inline-block" href="/">
                  <Button :text="$t('Thanks.BackHome')" isBlack icon="material-symbols:other-houses"
                    transition="top-right" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/nav/Header.vue";
import Button from "@/components/common/Button.vue";

const { locale, t } = useI18n();

useHead({
    title: t('Thanks.Title'),
    titleTemplate: '%s',
    htmlAttrs: {
        lang: locale.value
    }
})
</script>
