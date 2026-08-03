<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { authorStore } from '../../authors/store';
import type { Book } from '../store';

import { getMessage } from '../../../services/error';

import FormError from '../../../components/FormError.vue';

onMounted(() => {
     authorStore.actions.getAll();
});

const allAuthors = authorStore.getters.all;

const props = defineProps<{
    book: Book;
    buttonText: string;
}>();

const emit = defineEmits<{
    (event: 'submit', book: Book): void;
}>();

const bookTemp = ref<Book>({...props.book});

const handleSubmit = () => emit('submit', bookTemp.value);


</script>

<template>
    <div>
        <div v-if="getMessage">
            {{ getMessage }}
        </div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="title">Titel:</label>
                <input id="title" v-model="bookTemp.title" type="text" required />
                <FormError name="title" />
            </div>
            <div>
                <label for="summary">Samenvatting:</label>
                <textarea id="summary" v-model="bookTemp.summary" required></textarea>
                <FormError name="summary" />
            </div>
            <div>
                <label for="author">Auteur:</label>
                <select id="author" v-model="bookTemp.author_id" required>
                    <option v-for="author in allAuthors" :key="author.id" :value="author.id">
                        {{ author.name }}
                    </option>
                </select>
                <FormError name="author" />
            </div>

            <button type="submit">{{ buttonText }}</button>
        </form>
    </div>
</template>
