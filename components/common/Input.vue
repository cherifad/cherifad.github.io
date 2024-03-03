<template>
    <div>
        <label :for="label" :class="`font-normal mb-4 text-xl ${isBlack ? 'text-[#969696]' : 'text-gray-900'}`">{{ label
        }}</label>
        <textarea :id="label" :placeholder="placeholder" v-if="type === 'textarea'" :rows="rows"
            :class="`py-3 w-full px-5 rounded-xl text-xl font-normal transition duration-300 outline-none ease-in-out flex justify-between items-center bg-transparent gap-2 ${isBlack ? 'text-[#969696] border border-[#969696]' : 'text-gray-900 bg-gray-200 border border-gray-200 hover:bg-gray-900 hover:text-white'}` + customClass"
            @input="(e: any) => updateValue(e.target.value)" />
        <input :id="idValue" :type="type" :placeholder="placeholder" v-else
            :class="`py-3 w-full mb-4 px-5 rounded-xl text-xl font-normal transition duration-300 outline-none ease-in-out flex justify-between items-center bg-transparent gap-2 ${isBlack ? 'text-[#969696] border border-[#969696]' : 'text-gray-900 bg-gray-200 border border-gray-200 hover:bg-gray-900 hover:text-white'}` + customClass"
            @input="(e: any) => updateValue(e.target.value)" />
    </div>
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
    },
    customClass: {
        type: String,
        default: ""
    }
});

const idValue = ref(props.id);

const emit = defineEmits(['update:modelValue'])

const updateValue = (value: any) => {
    emit('update:modelValue', value)
}

onMounted(() => {
    if (!idValue.value) {
        idValue.value = randomString();
    }
    updateValue(props.value)
});
</script>