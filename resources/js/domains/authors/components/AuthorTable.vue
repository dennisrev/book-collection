<script setup lang="ts">
import type {Author} from '../store';
import {deleteAuthor} from '../store';

const props = defineProps<{
    authors: Author[];
}>();
</script>

<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>
                <RouterLink :to="{name: 'authors.edit', params: {id: author.id}}">
                    <button type="button">Bewerken</button>
                </RouterLink>
            </td>
            <td>
                <button @click="deleteAuthor(author.id)">Verwijderen</button>
            </td>
        </tr>
    </table>
</template>
