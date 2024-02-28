<template>
    <nav class="flex justify-evenly border-b-2">
        <ul class="flex flex-1 justify-evenly items-center">
            <li>{{ $t('Header.Menu.About') }}</li>
            <li>{{ $t('Header.Menu.Projects') }}</li>
        </ul>
        <div class="font-bold flex flex-col justify-center items-center text-4xl">
            <span class="lin-grad">
                Adlen
            </span>
            <span class="lin-grad">
                CHERIF
            </span>
        </div>
        <ul class="flex flex-1 justify-evenly items-center">
            <li>{{ $t('Header.Menu.Skills') }}</li>
            <li>{{ $t('Header.Menu.Contact') }}</li>
        </ul>
    </nav>
</template>

