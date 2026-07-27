<script setup lang="ts">

import Form from '../components/Form.vue';
import type { Book } from '../store';
import { createBook } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const book: Book = {
    title: '',
    summary: '',
    author_id: 0,
};

const handleBookSubmit = async (data: Book) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};

</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" button-text="Toevoegen" @submit="handleBookSubmit" />
    </div>
</template>