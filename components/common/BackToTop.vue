<template>
    <div id="backToTop" class="fixed bottom-4 right-4" v-if="isVisibile">
        <!-- <button class="bg-gradient-to-r from-primary to-secondary" @click="scrollToTop">
            <Icon name="cil:arrow-top" class="w-6 h-6" />
        </button> -->
        <Button class="mt-3 w-fit" text="" icon="cil:arrow-top"
        @click="scrollToTop" transition="top" />
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/common/Button.vue';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const isVisibile = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        isVisibile.value = window.scrollY > 100;
    });
});

</script>

<style scoped>
#vbackToTop {
    z-index: 1000;
    transition: all 0.3s;
}
</style>