<script setup lang="ts">
import AuthorForm from '../components/AuthorForm.vue';
import type { Author} from '../store';
import { authorStore } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const author: Author = {
    id: 0,
    name: '',
};

const handleAuthorSubmit = async (data: Author) => {
    await authorStore.actions.create(data);
    router.push({name: 'authors.overview'});
};
</script>

<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <AuthorForm :author="author" button-text="Toevoegen" @submit="handleAuthorSubmit" />
    </div>
</template>