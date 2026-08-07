<script setup lang="ts">
import { ref } from 'vue';
import type { Review } from '../store';

import { getMessage } from '../../../services/error';

import FormError from '../../../components/FormError.vue';

const props = defineProps<{
    review: Review;
    buttonText: string;
}>();

const emit = defineEmits<{
    (event: 'submit', review: Review): void;
}>();

const reviewTemp = ref<Review>({...props.review});

const handleSubmit = () => emit('submit', reviewTemp.value);
</script>

<template>
    <div>
        <div v-if="getMessage">
            {{ getMessage }}
        </div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="review_text">Review:</label>
                <textarea id="review_text" v-model="reviewTemp.review_text" required></textarea>
                <FormError name="review_text" />
            </div>
            <button type="submit">{{ buttonText }}</button>
        </form>
    </div>
</template>