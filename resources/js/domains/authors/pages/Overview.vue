<script setup lang="ts">

import { onMounted } from 'vue'; 
import { fetchAuthors, getAllAuthors } from '../store'; 
import AuthorTable from '../components/AuthorTable.vue';

onMounted(() => {
    fetchAuthors();
});

const allAuthors = getAllAuthors;

</script>

<template>
    
    <AuthorTable :authors="allAuthors"/>

</template>
