<script setup lang="ts">
import ReviewForm from '../components/ReviewForm.vue';
import type { Review } from '../store';
import { reviewStore } from '../store';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
    reviewStore.actions.getAll();
});

const review = reviewStore.getters.getById(Number(route.params.reviewId));

const handleReviewSubmit = async (data: Review) => {
    await reviewStore.actions.update(data);
    const bookId = route.params.bookId;
    router.push({
        name: 'books.show',
        params: {id: bookId}
    });
};

</script>

<template>
    <div>
        <h2>Review bewerken</h2>
        <ReviewForm v-if="review" :review="review" button-text="Bewerken" @submit="handleReviewSubmit" />
    </div>
</template>