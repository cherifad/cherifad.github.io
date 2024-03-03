<template>
    <div class="mt-16 flex flex-col gap-8">
        <SectionHeader :title="$t('Section.Projects.Title')" :description="$t('Section.Projects.Description')" />
        <div class="flex flex-wrap justify-center">
            <ProjectCard v-for="(project, index) in $tm('SectionProjectsList')" :key="index" :title="$rt(project.Title)"
                :description="$rt(project.Description)" :link="project.Link"
                :technologies="project.Technologies.map(technology => ({ name: $rt(technology.Name), icon: technology.Icon }))"
                :image="$rt(project.Image)" :year="$rt(project.Year)" />
        </div>
        <a  class="mt-8 self-center" href="https://github.com/cherifad" target="_blank">
            <Button :text="$t('Section.Projects.More')" icon="mdi:github" transition="top-right" />
        </a>
    </div>
</template>

<script setup>
import Button from './common/Button.vue';
</script>