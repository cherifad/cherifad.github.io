<template>
    <div class="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
        {{ message }}
    </div>
</template>

<script setup>
defineProps({
    message: String
})

onMounted(() => {
    setTimeout(() => {
        document.querySelector('.fixed')?.classList.add('animate__animated', 'animate__fadeOutUp')
        setTimeout(() => {
            document.querySelector('.fixed')?.remove()
        }, 1000)
    }, 3000)
})
</script>

<style>
.fixed {
    animation-duration: 1s;
}

@keyframes fadeOutUp {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(0, -100%, 0);
    }
}

.animate__fadeOutUp {
    animation-name: fadeOutUp;
}


</style>