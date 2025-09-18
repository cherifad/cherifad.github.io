<template>
  <header>
    <nav class="flex justify-evenly border-b-2 border-[#2a2a2c] py-8">
      <ul class="flex-1 justify-evenly items-center text-xl hidden lg:flex">
        <li class="cursor-pointer">
          <NuxtLink to="/#projects">
            {{ $t("Header.Menu.Projects") }}
          </NuxtLink>
        </li>
        <li class="cursor-pointer">
          <NuxtLink to="/#edu">
            {{ $t("Header.Menu.School") }}
          </NuxtLink>
        </li>
      </ul>
      <div
        class="lg:hidden flex-1 flex justify-start items-center cursor-pointer"
      >
        <transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-75 rotate-90"
          enter-to-class="opacity-100 scale-100 rotate-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 rotate-0"
          leave-to-class="opacity-0 scale-75 -rotate-90"
        >
          <Icon
            v-if="!isMenuOpen"
            key="hamburger"
            class="text-3xl"
            name="pajamas:hamburger"
            @click="toggleMenu"
          />
          <Icon
            v-else
            key="close"
            class="text-3xl"
            name="mdi:close"
            @click="toggleMenu"
          />
        </transition>
      </div>
      <NuxtLink to="/" class="font-bold flex flex-col justify-center items-center text-4xl">
        <span class="lin-grad"> Adlen </span>
        <span class="lin-grad"> CHERIF </span>
      </NuxtLink>
      <ul class="flex-1 justify-evenly items-center text-xl hidden lg:flex">
        <li class="cursor-pointer">
          <NuxtLink to="/#contact">
            {{ $t("Header.Menu.Contact") }}
          </NuxtLink>
        </li>
        <li class="cursor-pointer">
          <LanguageSwitcher />
        </li>
      </ul>
      <div
        class="lg:hidden flex-1 flex justify-end items-center cursor-pointer"
      >
        <a href="#contact">
          <Icon
            class="text-3xl"
            name="solar:letter-broken"
            @click="toggleMenu"
          />
        </a>
      </div>
    </nav>
    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="lg:hidden">
        <ul class="flex flex-col items-center gap-4 mt-3">
          <li class="cursor-pointer">
            <NuxtLink to="/#projects">{{ $t("Header.Menu.Projects") }}</NuxtLink>
          </li>
          <li class="cursor-pointer">
            <NuxtLink to="/#edu">{{ $t("Header.Menu.School") }}</NuxtLink>
          </li>
          <li class="cursor-pointer">
            <NuxtLink to="/#contact">{{ $t("Header.Menu.Contact") }}</NuxtLink>
          </li>
          <li class="cursor-pointer">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
