<script setup lang="ts">
import ReviewForm from '../components/ReviewForm.vue';
import type { Review } from '../store';
import { reviewStore } from '../store';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const bookId = Number(route.params.id);

const review: Review = {
    id: 0,
    review_text: '',
    book_id: bookId,
};

const handleReviewSubmit = async (data: Review) => {
    await reviewStore.actions.create(data);
    router.push({name: 'books.show'});
};

</script>

<template>
    <div>
        <h2>Nieuwe review toevoegen</h2>
        <ReviewForm :review="review" button-text="Toevoegen" @submit="handleReviewSubmit" />
    </div>
</template>