<script setup lang="ts">

import { computed, onMounted } from 'vue';  
import { bookStore } from '../store.js';
import BookTable from '../components/BookTable.vue';

onMounted(() => {
    const isStoreEmpty = Object.keys(bookStore.getters.all.value).length === 0;
    
    if (isStoreEmpty) {
        bookStore.actions.getAll();
    }
});

const allBooks = computed(() => Object.values(bookStore.getters.all.value));

</script>

<template>
    
    <BookTable :books="allBooks"/>

</template>
