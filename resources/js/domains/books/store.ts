import axios from 'axios';
import {ref, computed} from 'vue';

import type { Author } from '../authors/store'; 

export interface Book {
    id: number;
    title: string;
    summary: string;
    author_id: number;
};

export interface NewBook {
    title: string;
    summary: string; 
    author_id: number; 
};

const books = ref<Book[]>([]);

export const getAllBooks = computed(() => books.value);

export const fetchBooks = async () => {
    const { data } = await axios.get('/api/books');
    if (!data) return
    books.value = data;
};

export const createBook = async (newBook: NewBook) => {
    const {data} = await axios.post('/api/books', newBook);
    if(!data) return
    books.value = data;
};