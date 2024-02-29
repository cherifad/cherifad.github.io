<template>
    <div id="head" class="lg:min-h-[80vh] min-h-[60vh] rounded-b-3xl lg:px-16 px-9 flex flex-col">
        <Header />
        <Home />
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/nav/Header.vue";
import Home from "@/components/Home.vue";
</script>

<style>
#head {
    background: linear-gradient(117deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 35%);
}
</style>