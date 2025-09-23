<template>
  <div id="head" class="lg:min-h-[60vh] min-h-[40vh] rounded-b-3xl lg:px-16 px-9 flex flex-col">
    <Header />
    <div class="flex-1 flex justify-between my-16">
      <div class="lg:w-2/3">
        <h1 class="lg:text-8xl sm:text-6xl text-4xl font-semibold uppercase lin-grad">
          {{ project.Title }}
        </h1>
        <p class="md:text-2xl lg:w-11/12 font-light">
          {{ project.Description }}
        </p>
        <div class="flex flex-row gap-2 flex-wrap items-center mt-2">
          <span v-for="(technology, index) in technologies" :key="index"
            class="text-sm bg-gray-200 px-2 py-1 rounded-md flex items-center gap-1 hover:bg-gray-300">
            <Icon :name="technology.icon" class="w-4 h-4" />
            {{ technology.name }}
          </span>
        </div>
        <div class="flex flex-row gap-4 flex-wrap">
          <a class="mt-8 inline-block" :href="project.Link" target="_blank" v-if="project.Link !== '#'">
            <Button :text="$t('Section.Projects.Single.Details.SeeMore')" isBlack icon="material-symbols:open-in-new"
              transition="top-right" />
          </a>
          <a class="mt-8 inline-block" :href="project.Repository" target="_blank" v-if="project.Repository">
            <Button :text="$t('Section.Projects.Single.Details.SeeRepository')" isBlack icon="mdi:github"
              transition="top-right" />
          </a>
        </div>
      </div>
      <div class="w-1/3">
        <img v-if="project?.Image" :src="`/img/project-img/${project.Slug}/${project.Image}`" :alt="project.Title"
          class="w-full object-contain hidden lg:block rounded-lg" />
      </div>
    </div>
  </div>
  <div class="lg:px-16 px-9">
    <div class="mt-16">
      <SectionHeader :title="$t('Section.Projects.Single.Details.Overview')" :description="project.Details.Overview"
        class="mt-16" />
      <SectionHeader :title="$t('Section.Projects.Single.Details.Problem')" :description="project.Details.Problem"
        class="mt-16" />
      <SectionHeader :title="$t('Section.Projects.Single.Details.Solution')" :description="project.Details.Solution"
        class="mt-16" />
      <div class="mt-16">
        <SectionHeader :title="$t('Section.Projects.Single.Details.Challenges')" />
        <ul class="text-[#969696] md:text-2xl text-lg font-light mt-2">
          <li v-for="(challenge, index) in project.Details.Challenges" :key="index" class="flex items-center gap-2">
            <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
            {{ challenge }}
          </li>
        </ul>
      </div>
      <div class="mt-16">
        <SectionHeader :title="$t('Section.Projects.Single.Details.LessonsLearned')" />
        <ul class="text-[#969696] md:text-2xl text-lg font-light mt-2">
          <li v-for="(lesson, index) in project.Details.LessonsLearned" :key="index" class="flex items-center gap-2">
            <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
            {{ lesson }}
          </li>
        </ul>
      </div>
      <div class="mt-16" v-if="project.Details.FutureImprovements && project.Details.FutureImprovements.length">
        <SectionHeader :title="$t('Section.Projects.Single.Details.FutureImprovements')" />
        <ul class="text-[#969696] md:text-2xl text-lg font-light mt-2">
          <li v-for="(improvement, index) in project.Details.FutureImprovements" :key="index"
            class="flex items-center gap-2">
            <Icon class="text-2xl" name="material-symbols-light:arrow-right-alt-rounded" />
            {{ improvement }}
          </li>
        </ul>
      </div>

      <div class="mt-16" v-if="project.Details.Screenshots && project.Details.Screenshots.length">
        <SectionHeader :title="$t('Section.Projects.Single.Details.Screenshots')" />

        <!-- Galerie masonry -->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-4">
          <div v-for="(screenshot, index) in project.Details.Screenshots" :key="index"
            class="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group" @click="openLightbox(index)">
            <img :src="`/img/project-img/${project.Slug}/${screenshot}`" :alt="`Capture d’écran ${index + 1}`"
              class="w-full rounded-lg transform group-hover:scale-105 transition duration-300" />
          </div>
        </div>
      </div>


      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        @keydown.esc="closeLightbox" @keydown.arrow-left="prevImage" @keydown.arrow-right="nextImage" tabindex="0"
        ref="lightbox">
        <!-- Bouton fermer -->
        <button class="absolute top-5 right-5 text-white text-3xl font-bold" @click="closeLightbox">
          ✕
        </button>

        <!-- Image affichée avec transition -->
        <transition name="fade" mode="out-in">
          <img :key="currentImage"
            :src="`/img/project-img/${project.Slug}/${project.Details.Screenshots[currentImage]}`"
            class="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg" />
        </transition>

        <!-- Flèche gauche -->
        <button class="absolute left-5 text-white text-4xl font-bold px-3 py-2 bg-black bg-opacity-50 rounded-full"
          @click.stop="prevImage">
          ‹
        </button>

        <!-- Flèche droite -->
        <button class="absolute right-5 text-white text-4xl font-bold px-3 py-2 bg-black bg-opacity-50 rounded-full"
          @click.stop="nextImage">
          ›
        </button>

        <!-- Compteur -->
        <div class="absolute bottom-5 text-white text-lg bg-black bg-opacity-50 px-3 py-1 rounded-lg">
          {{ currentImage + 1 }} / {{ project.Details.Screenshots.length }}
        </div>
      </div>

      <div class="mt-8 flex justify-center lg:justify-start w-full">
        <NuxtLink to="/projects">
          <Button :text="$t('Section.Projects.Single.Details.Back')" :isBlack="false" icon="mdi:arrow-up"
            transition="top" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/nav/Header.vue";
import Button from "@/components/common/Button.vue";

const { tm, rt, locale } = useI18n();
const route = useRoute();

// Reactive project (recomputed when locale changes)
const project = computed(() =>
  tm("SectionProjectsList").find(
    (p: { Slug: string | string[] }) => p.Slug === route.params.slug
  )
);

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project Not Found" });
}

useHead({
  title: `${project.value.Title} | Adlen CHERIF`,
  titleTemplate: '%s',
  htmlAttrs: {
    lang: locale.value
  }
})

useSeoMeta({
  title: `${project.value.Title} | Adlen CHERIF`,
  description: `${project.value.Description} | Adlen CHERIF`,
  ogTitle: `${project.value.Title} | Adlen CHERIF`,
  ogDescription: `${project.value.Description} | Adlen CHERIF`,
  ogImage: `/img/project-img/${project.value.Slug}/${project.value.Image}`,
  twitterCard: 'summary_large_image'
})

// Reactive technologies
const technologies = computed(() =>
  project.value?.Technologies.map(
    (technology: { Name: any; Icon: any }) => ({
      name: rt(technology.Name),
      icon: technology.Icon,
    })
  ) ?? []
);

const lightboxOpen = ref(false);
const currentImage = ref(0);
const lightbox = ref<HTMLElement | null>(null);

function openLightbox(index: number) {
  currentImage.value = index;
  lightboxOpen.value = true;

  // focus pour capturer les touches clavier
  setTimeout(() => {
    lightbox.value?.focus();
  }, 50);
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function prevImage() {
  currentImage.value =
    (currentImage.value - 1 + project.value.Details.Screenshots.length) %
    project.value.Details.Screenshots.length;
}

function nextImage() {
  currentImage.value =
    (currentImage.value + 1) % project.value.Details.Screenshots.length;
}
</script>
