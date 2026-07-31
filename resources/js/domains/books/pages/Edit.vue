<script setup lang="ts">
import BookForm from '../components/BookForm.vue';
import type { Book } from '../store';
import { onMounted } from 'vue';
import { bookStore } from '../store';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
    bookStore.actions.getAll();
});

const book = bookStore.getters.getById(Number(route.params.id));

const handleBookSubmit = async (data: Book) => {
    await bookStore.actions.update(data);
    router.push({name: 'books.overview'});
};
</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <BookForm v-if="book" :book="book" button-text="Bewerken" @submit="handleBookSubmit" />
    </div>
</template>
