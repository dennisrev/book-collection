<script setup lang="ts">

import type { BookWithId } from '../store';

import { getAuthorById } from '../../authors/store';

const props = defineProps<{
    books: BookWithId[]
}>();

</script>

<template>
    <table>
        <tr>
            <th>Titel</th>
            <th>Samenvatting</th>
            <th>Auteur</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td>{{ getAuthorById(book.author_id).value?.name }}</td>
            <td>
                <RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">
                    <button type="button">Bewerken</button>
                </RouterLink>
            </td>
        </tr>
    </table>

</template>