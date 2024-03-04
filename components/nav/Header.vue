<template>
    <header>
        <nav class="flex justify-evenly border-b-2 border-[#2a2a2c] py-8">
            <ul class="flex-1 justify-evenly items-center text-xl hidden lg:flex">
                <li class="cursor-pointer">
                    <a href="#projects">
                        {{ $t('Header.Menu.Projects') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <a href="#edu">
                        {{ $t('Header.Menu.School') }}
                    </a>
                </li>
            </ul>
            <div class="lg:hidden flex-1 flex justify-start items-center cursor-pointer">
                <Icon class="text-3xl" name="pajamas:hamburger" @click="toggleMenu" />
            </div>
            <div class="font-bold flex flex-col justify-center items-center text-4xl">
                <span class="lin-grad">
                    Adlen
                </span>
                <span class="lin-grad">
                    CHERIF
                </span>
            </div>
            <ul class="flex-1 justify-evenly items-center text-xl hidden lg:flex">
                <li class="cursor-pointer">
                    <a href="#contact">
                        {{ $t('Header.Menu.Contact') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <LanguageSwitcher />
                </li>
            </ul>
            <div class="lg:hidden flex-1 flex justify-end items-center cursor-pointer">
                <a href="#contact">
                    <Icon class="text-3xl" name="solar:letter-broken" @click="toggleMenu" />
                </a>
            </div>
        </nav>
        <!-- Mobile menu -->
        <div class="lg:hidden transition ease-in-out" v-if="isMenuOpen">
            <ul class="flex flex-col items-center gap-4 mt-3">
                <li class="cursor-pointer">
                    <a href="#projects">
                        {{ $t('Header.Menu.Projects') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <a href="#edu">
                        {{ $t('Header.Menu.School') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <a href="#contact">
                        {{ $t('Header.Menu.Contact') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <LanguageSwitcher />
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>