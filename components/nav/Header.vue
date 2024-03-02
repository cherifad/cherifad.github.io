<template>
    <header>
        <nav class="flex justify-evenly border-b-2 py-8">
            <ul class="flex-1 justify-evenly items-center text-xl hidden lg:flex">
                <li class="cursor-pointer">
                    <a href="#projects">
                        {{ $t('Header.Menu.Projects') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <a href="#">
                        {{ $t('Header.Menu.Skills') }}
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
                <Icon class="text-3xl" name="material-symbols:call" @click="toggleMenu" />
            </div>
        </nav>
        <!-- Mobile menu -->
        <div class="lg:hidden" v-if="isMenuOpen">
            <ul class="flex flex-col items-center gap-4">
                <li class="cursor-pointer">
                    <a href="#projects">
                        {{ $t('Header.Menu.Projects') }}
                    </a>
                </li>
                <li class="cursor-pointer">
                    <a href="#">
                        {{ $t('Header.Menu.Skills') }}
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