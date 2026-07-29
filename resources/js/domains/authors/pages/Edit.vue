<script setup lang="ts">
import AuthorForm from '../components/AuthorForm.vue';
import type {Author} from '../store';
import {onMounted} from 'vue';
import {fetchAuthors, updateAuthor, getAuthorById} from '../store';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

onMounted(() => {
    fetchAuthors();
});

const author = getAuthorById(Number(route.params.id));

const handleAuthorSubmit = async (data: Author & {id?: number}) => {
    await updateAuthor(Number(route.params.id), data);
    router.push({name: 'authors.overview'});
};
</script>

<template>
    <div>
        <h2>Auteur bewerken</h2>
        <AuthorForm v-if="author" :author="author" button-text="Bewerken" @submit="handleAuthorSubmit" />
    </div>
</template>
