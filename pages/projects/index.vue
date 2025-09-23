<template>
    <div id="head" class="lg:min-h-[40vh] min-h-[20vh] rounded-b-3xl lg:px-16 px-9 flex flex-col">
        <Header />
        <div class="flex-1 flex justify-between my-16">
            <div class="lg:w-2/3">
                <h1 class="lg:text-8xl sm:text-6xl text-4xl font-semibold uppercase lin-grad">
                    {{ $t('Projects.Page.Title') }}
                </h1>
                <p class="md:text-2xl lg:w-11/12 font-light">
                    {{ $t('Projects.Page.Description') }}
                </p>
            </div>
        </div>
    </div>
    <div class="flex flex-wrap justify-center mt-16 lg:px-16 px-9">
        <ProjectCard v-for="(project, index) in $tm('SectionProjectsList')" :key="index" :title="$rt(project.Title)"
            :description="$rt(project.Description)" :link="project.Link"
            :technologies="project.Technologies.map(technology => ({ name: $rt(technology.Name), icon: technology.Icon }))"
            :image="$rt(project.Image)" :year="$rt(project.Year)" :slug="$rt(project.Slug)" />
    </div>
</template>

<script setup>
import Header from "@/components/nav/Header.vue";

const { locale, t } = useI18n();

useHead({
    title: t('Seo.Projects.Title'),
    titleTemplate: '%s',
    htmlAttrs: {
        lang: locale.value
    }
})

useSeoMeta({
    title: t('Seo.Projects.Title'),
    description: t('Seo.Projects.Description'),
    ogTitle: t('Seo.Projects.OgTitle'),
    ogDescription: t('Seo.Projects.OgDescription'),
    ogImage: t('Seo.Projects.OgImage'),
    twitterCard: 'summary_large_image'
})
</script>
