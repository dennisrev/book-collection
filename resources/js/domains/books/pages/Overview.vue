<script setup lang="ts">

import { onMounted } from 'vue';  
import { bookStore } from '../store.js';
import BookTable from '../components/BookTable.vue';

onMounted(() => {
        bookStore.actions.getAll();
});

const allBooks = bookStore.getters.all;

</script>

<template>
    
    <BookTable :books="allBooks"/>

</template>
