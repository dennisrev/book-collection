<script setup lang="ts">
import BookDetails from '../components/BookDetails.vue';
import {onMounted} from 'vue';
import {bookStore} from '../store.js';
import { authorStore } from '../../authors/store.js';
import {reviewStore} from '../../reviews/store.js';
import {useRoute} from 'vue-router';
import ReviewTable from '../../reviews/components/ReviewTable.vue';
const route = useRoute();

onMounted(() => {
    bookStore.actions.getAll();
    authorStore.actions.getAll();
    reviewStore.actions.getAll();
});

const book = bookStore.getters.getById(Number(route.params.id));

const bookReviews = reviewStore.getters.getAllByBookId(Number(route.params.id));

</script>

<template>
    <div>
        <h2><strong>Details van het boek:</strong></h2>
        <BookDetails v-if="book" :book="book" />
        <br>
        <h2><strong>Reviews van het boek:</strong></h2>
        <ReviewTable :reviews="bookReviews" />
        <div align="center">
            <RouterLink :to="{name: 'reviews.create'}">
                <button type="button">Review toevoegen</button>
            </RouterLink>
        </div>
    </div>
</template>
