<script setup lang="ts">

import type { Book } from '../store';

const props = defineProps<{
    books: Book[]
}>();

</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
        </tr>
    </table>

</template>