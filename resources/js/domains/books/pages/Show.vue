<script setup lang="ts">
import BookDetails from '../components/BookDetails.vue';
import BookReviews from '../components/BookReviews.vue';
import {onMounted} from 'vue';
import {bookStore} from '../store.js';
import {reviewStore} from '../../reviews/store.js';
import {useRoute} from 'vue-router';

const route = useRoute();

onMounted(() => {
    bookStore.actions.getAll();
    reviewStore.actions.getAll();
});

const book = bookStore.getters.getById(Number(route.params.id));

const allReviews = reviewStore.getters.all;
</script>

<template>
    <div>
        <h2><strong>Details van het boek:</strong></h2>
        <BookDetails v-if="book" :book="book" />
        <h2><strong>Reviews:</strong></h2>
        <pre>{{ allReviews }}</pre>
        <BookReviews :reviews="allReviews" />
    </div>
</template>
