<template>
    <button :id="`btn-${getRandomString()}`" :disabled="disabled" :aria-label="text" :class="{
        'py-3 px-5 rounded-full text-xl font-light uppercase transition duration-300 ease-in-out flex justify-between items-center gap-2': true,
        'text-white bg-[#1e1e20] border border-[#1e1e20] hover:bg-gray-200 hover:text-[#1e1e20]': isBlack,
        'text-[#1e1e20] bg-gray-200 border border-gray-200 hover:bg-[#1e1e20] hover:text-white': !isBlack,
        'cursor-not-allowed opacity-50': disabled
    }">
        {{ text }}
        <Icon v-if="icon" :name="icon" :class="{
        'trans-bot': transition === 'bottom',
        'trans-top-right': transition === 'top-right',
        'trans-right': transition === 'right'
    }" />
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    isBlack: Boolean,
    icon: {
        type: String,
        default: null
    },
    transition: {
        type: String,
        default: null
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const getRandomString = () => Math.random().toString(36).substring(7)

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

#btn:hover .trans-right {
    transform: translate3d(.2rem, 0, 0);
}
</style>