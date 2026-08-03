<script setup lang="ts">
import { ref } from 'vue';
import type { Author } from '../store';

import { getMessage } from '../../../services/error';

import FormError from '../../../components/FormError.vue';

const props = defineProps<{
    author: Author;
    buttonText: string;
}>();

const emit = defineEmits<{
    (event: 'submit', author: Author): void;
}>();

const authorTemp = ref<Author>({...props.author});

const handleSubmit = () => emit('submit', authorTemp.value);
</script>

<template>
    <div>
        <div v-if="getMessage">
            {{ getMessage }}
        </div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Naam:</label>
                <input id="name" v-model="authorTemp.name" type="text" required />
                <FormError name="name" />
            </div>
            <button type="submit">{{ buttonText }}</button>
        </form>
    </div>
</template>
