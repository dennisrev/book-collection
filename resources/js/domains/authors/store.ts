import { deleteRequest, getRequest, postRequest, putRequest } from '../../services/http';
import { ref, computed } from 'vue';

export interface Author {
    id: number;
    name: string;
}

const authors = ref<Author[]>([]);

export const getAllAuthors = computed(() => authors.value);

export const getAuthorById = (id: number) => computed(() => authors.value.find(author => author.id === id));

export const fetchAuthors = async () => {
    const {data} = await getRequest('/authors');
    if (!data) return;
    authors.value = data;
};

export const createAuthor = async (newAuthor: Author) => {
    const {data} = await postRequest('/authors', newAuthor);
    if (!data) return;
    authors.value = data;
};

export const updateAuthor = async (updatedAuthor: Author) => {
    const {data} = await putRequest(`/authors/${updatedAuthor.id}`, updatedAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (id: number) => {
    try {
        await deleteRequest(`/authors/${id}`);
        authors.value = authors.value.filter(author => author.id !== id);
    } catch (error: any) {
        alert(error.response.data.message);
    }
};
