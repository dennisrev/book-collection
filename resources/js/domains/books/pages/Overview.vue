<script setup lang="ts">

import { onMounted } from 'vue'; 
import { fetchBooks, getAllBooks } from '../store'; 
import BookTable from '../components/BookTable.vue';

onMounted(() => {
    fetchBooks();
});

const allBooks = getAllBooks;

</script>

<template>
    
    <BookTable :books="allBooks"/>

</template>
