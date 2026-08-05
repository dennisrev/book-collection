<script setup lang="ts">
import type {Book} from '../store';

//import {bookStore} from '../store';
import {authorStore} from '../../authors/store';

const props = defineProps<{
    book: Book;
}>();
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Titel</th>
                <th>Samenvatting</th>
                <th>Auteur</th>
            </tr>
            <tr>
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td>{{ authorStore.getters.getById(book.author_id).value?.name }}</td>
            </tr>
        </tbody>
    </table>
</template>
