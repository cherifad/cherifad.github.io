<template>
    <!-- .contact-form label {
    font-size: 1.5rem;
    font-weight: 400;
    color: #969696;
    margin-bottom: 1rem;
} -->
    <label :for="idValue" :class="`font-normal mb-4 text-xl ${isBlack ? 'text-[#969696]' : 'text-gray-900'}`">{{ label }}</label>
    <textarea :id="idValue" :placeholder="placeholder" v-if="type === 'textarea'" :rows="rows"
        :class="`py-3 w-full px-5 rounded-xl text-xl font-normal uppercase transition duration-300 ease-in-out flex justify-between items-center bg-transparent gap-2 ${isBlack ? 'text-[#969696] border border-[#969696]' : 'text-gray-900 bg-gray-200 border border-gray-200 hover:bg-gray-900 hover:text-white'}`"
        v-model="inputValue" />
    <input :id="idValue" :type="type" :placeholder="placeholder" v-else
        :class="`py-3 w-full mb-4 px-5 rounded-xl text-xl font-normal uppercase transition duration-300 ease-in-out flex justify-between items-center bg-transparent gap-2 ${isBlack ? 'text-[#969696] border border-[#969696]' : 'text-gray-900 bg-gray-200 border border-gray-200 hover:bg-gray-900 hover:text-white'}`"
        v-model="inputValue" />
</template>

<script setup lang="ts">
function randomString() {
    return Math.random().toString(36).substring(7)
}


const props = defineProps({
    type: String,
    label: String,
    isBlack: Boolean,
    id: {
        type: String,
        default: null
    },
    icon: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: null
    },
    value: {
        type: String,
        default: null
    },
    rows: {
        type: Number,
        default: 5
    }
});

const inputValue = ref(props.value);
const idValue = ref(props.id);

onMounted(() => {
    if (!idValue.value) {
        idValue.value = randomString();
    }
});

const { emit }: any = defineEmits();

watch(inputValue, (newValue) => {
    emit('update:value', newValue);
});
</script>