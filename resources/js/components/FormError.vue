<script setup lang="ts">

import { getErrorBagByProperty } from '../services/error';

defineProps<{
    name: string
}>();

</script>

<template>
    <div v-for="error in getErrorBagByProperty(name).value" :key="error">
        {{ error }}
    </div>
</template>