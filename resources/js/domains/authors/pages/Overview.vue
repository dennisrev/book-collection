<script setup lang="ts">

import { onMounted } from 'vue'; 
import { authorStore } from '../store.js';
import AuthorTable from '../components/AuthorTable.vue';

onMounted(() => {
    authorStore.actions.getAll();
});

const allAuthors = authorStore.getters.all;

</script>

<template>
    
    <AuthorTable :authors="allAuthors"/>

</template>