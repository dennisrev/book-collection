<script setup lang="ts">

import type { Author } from '../store';

const props = defineProps<{
    authors: Author[]
}>();

</script>

<template>
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
        </tr>
    </table>

</template>