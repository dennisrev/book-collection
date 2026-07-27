<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import type { Book } from '../store';

onMounted(() => {
    fetchAuthors();
});

const props = defineProps<{
    book: Book & { id?: number }
    buttonText: string
}>();

const emit = defineEmits<{
    (event: 'submit', book: Book): void
}>();

const form = ref<Book>({
    title: props.book.title,
    summary: props.book.summary,
    author_id: props.book.author_id,
});

const handleSubmit = () => emit('submit', form.value);

</script>

<template>

<div>

    <form @submit.prevent="handleSubmit">
        <div>
            <label for="title">Titel:</label>
            <input id="title" v-model="form.title" type="text" required/>
        </div>
        <div>
            <label for="summary">Samenvatting:</label>
            <textarea id="summary" v-model="form.summary" required></textarea>
        </div>
        <div>
            <label for="author">Auteur:</label>
            <select id="author" v-model="form.author_id" required>
                <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                    {{ author.name }}
                </option>
            </select>
        </div>
        
        <button type="submit" >{{ buttonText }}</button>
    </form>
</div>

</template>