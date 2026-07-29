import axios from 'axios';
import {ref, computed} from 'vue';

export interface Author {
    name: string;
}

export interface AuthorWithId {
    id: number;
    name: string;
}

const authors = ref<AuthorWithId[]>([]);

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

export const updateAuthor = async (id: number, updatedAuthor: Author & {id?: number}) => {
    const {data} = await axios.put(`/api/author/${id}`);
    if (!data) return;
    authors.value = data;
};
