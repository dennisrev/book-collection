import axios from 'axios';
import {ref, computed} from 'vue';

export interface Author {
    id: number;
    name: string;
}

const authors = ref<Author[]>([]);

export const getAllAuthors = computed(() => authors.value);

export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id === id));

export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if (!data) return;
    authors.value = data;
};

export const createAuthor = async (newAuthor: Author) => {
    const {data} = await axios.post('/api/authors', newAuthor);
    if (!data) return;
    authors.value = data;
};

export const updateAuthor = async (updatedAuthor: Author) => {
    const {data} = await axios.put(`/api/authors/${updatedAuthor.id}`, updateAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (id: number) => {
    try {
        await axios.delete(`/api/authors/${id}`);
        authors.value = authors.value.filter(author => author.id !== id);
    } catch (error: any) {
        alert(error.response.data.message);
    }
};
