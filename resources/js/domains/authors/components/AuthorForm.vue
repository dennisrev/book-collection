<script setup lang="ts">
import {ref, toRaw} from 'vue';
import type {Author} from '../store';

const props = defineProps<{
    author: Author & {id?: number};
    buttonText: string;
}>();

const emit = defineEmits<{
    (event: 'submit', author: Author & {id?: number}): void;
}>();

const authorTemp = ref<Author & {id?: number}>(structuredClone(toRaw(props.author)));

const handleSubmit = () => emit('submit', authorTemp.value);
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Naam:</label>
                <input id="name" v-model="authorTemp.name" type="text" required />
            </div>
            <button type="submit">{{ buttonText }}</button>
        </form>
    </div>
</template>
