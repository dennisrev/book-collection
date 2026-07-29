<script setup lang="ts">
import type {Book} from '../store';

import {getAuthorById} from '../../authors/store';
import {deleteBook} from '../store';

const props = defineProps<{
    books: Book[];
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
                <RouterLink :to="{name: 'books.edit', params: {id: book.id}}">
                    <button type="button">Bewerken</button>
                </RouterLink>
            </td>
            <td>
                <button @click="deleteBook(book.id)">Verwijderen</button>
            </td>
        </tr>
    </table>
</template>
