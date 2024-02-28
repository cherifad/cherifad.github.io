<template>
    <button id="btn" :class="{
        'py-3 px-5 rounded-full text-xl font-light uppercase transition duration-300 ease-in-out flex justify-between items-center gap-2': true,
        'text-white bg-gray-900 border border-gray-900 hover:bg-gray-200 hover:text-gray-900': isBlack,
        'text-gray-900 bg-gray-200 border border-gray-200 hover:bg-gray-900 hover:text-white': !isBlack
    }">
        {{ text }}
        <Icon v-if="icon" :name="icon" :class="{
            'trans-bot': transition === 'bottom',
            'trans-top-right': transition === 'top-right'
        }" />
    </button>
</template>

<script setup lang="ts">

defineProps({
    text: String,
    href: String,
    isBlack: Boolean,
    icon: {
        type: String,
        default: null
    },
    transition: {
        type: String,
        default: true
    }
})

</script>

<style scoped>
#btn svg {
    transition: all 0.3s ease-in-out;
}

#btn:hover .trans-top-right {
    transform: translate3d(0.2rem, -.1rem, 0);
}

#btn:hover .trans-bot {
    transform: translate3d(0, .2rem, 0);
}
</style>