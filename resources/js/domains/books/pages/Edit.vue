<script setup lang="ts">

import Form from '../components/Form.vue';
import type { Book } from '../store';
import { onMounted } from 'vue';
import { fetchBooks, updateBook, getBookById } from '../store';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
    fetchBooks();
});

const book = getBookById(Number(route.params.id));

const handleBookSubmit = async (data: Book) => {
    await updateBook(Number(route.params.id), data);
    router.push({name: 'books.overview'});
};

</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" button-text="Bewerken" @submit="handleBookSubmit" />
    </div>
</template>