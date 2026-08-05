<script setup lang="ts">
import type {Review} from '../../reviews/store';

const props = defineProps<{
    reviews: Review[];
}>();
</script>

<template>
    <table>
        <tbody>
            <tr v-for="review in reviews" :key="review.id">
                <td>{{ review.review_text }}</td>
            </tr>
        </tbody>
    </table>
</template>
