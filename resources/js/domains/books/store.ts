import axios from 'axios';
import {ref, computed} from 'vue';

export interface Book {
    id: number;
    title: string;
    summary: string;
};

const books = ref<Book[]>([]);

export const getAllBooks = computed(() => books.value);

export const fetchBooks = async () => {
    const { data } = await axios.get('/api/books');
    if (!data) return
    books.value = data;
};