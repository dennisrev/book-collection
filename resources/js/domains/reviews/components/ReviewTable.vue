<script setup lang="ts">
import {reviewStore, type Review} from '../store';

const props = defineProps<{
    reviews: Review[];
}>();

const handleReviewDelete = async (id: number) => {
    await reviewStore.actions.delete(id);
};

</script>

<template>
    <table>
        <tbody>
            <template v-for="(review, index) in reviews" :key="review.id">
                <tr>
                    <td>{{ review.review_text }}</td>
                    <td>
                        <RouterLink :to="{name: 'reviews.edit', params: { bookId: review.book_id, reviewId: review.id} }">
                            <button type="button">Bewerken</button>
                        </RouterLink>
                    </td>
                    <td><button @click="handleReviewDelete(review.id)">Verwijderen</button></td>
                </tr>
                <tr><br></tr>
            </template>
        </tbody>
    </table>
</template>