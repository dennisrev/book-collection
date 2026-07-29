<script setup lang="ts">
import AuthorForm from '../components/AuthorForm.vue';
import type {Author} from '../store';
import {createAuthor} from '../store';
import {useRouter} from 'vue-router';

const router = useRouter();

const author: Author = {
    name: '',
};

const handleAuthorSubmit = async (data: Author) => {
    await createAuthor(data);
    router.push({name: 'authors.overview'});
};
</script>

<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <AuthorForm :author="author" button-text="Toevoegen" @submit="handleAuthorSubmit" />
    </div>
</template>
