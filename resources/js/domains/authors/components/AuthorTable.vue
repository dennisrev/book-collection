<script setup lang="ts">
import {getMessage} from '../../../services/error';
import type {Author} from '../store';

import {authorStore} from '../store';

const props = defineProps<{
    authors: Author[];
}>();

const handleAuthorDelete = async (id: number) => {
    await authorStore.actions.delete(id);
};
</script>

<template>
    <table>
        <tbody>
            <!-- <div v-if="getMessage">
                {{ getMessage }}
            </div> -->
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
                    <button @click="handleAuthorDelete(author.id)">Verwijderen</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
