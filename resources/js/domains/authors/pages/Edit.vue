<script setup lang="ts">
import AuthorForm from '../components/AuthorForm.vue';
import { authorStore } from '../store';
import type { Author } from '../store';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
    authorStore.actions.getAll();
});

const author = authorStore.getters.getById(Number(route.params.id));

const handleAuthorSubmit = async (data: Author) => {
    await authorStore.actions.update(data);
    router.push({name: 'authors.overview'});
};
</script>

<template>
    <div>
        <h2>Auteur bewerken</h2>
        <AuthorForm v-if="author" :author="author" button-text="Bewerken" @submit="handleAuthorSubmit" />
    </div>
</template>