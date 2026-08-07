import {ref, computed} from 'vue';
import {deleteRequest, getRequest, postRequest, putRequest} from '../http';
import {destroyErrors, destroyMessage} from '../error';

export const storeModuleFactory = (moduleName: string) => {
    const state = ref<Record<number, any>>({});

    const getters = {
        all: computed(() => Object.values(state.value)),
        getById: (id: number) => computed(() => state.value[id]),
        getAllByBookId: (id: number) => computed(() => {
            return Object.values(state.value).filter(review => review.book_id === id);
        }),
    };

    const setters = {
        setAll: (items: Array<{id: number; [key: string]: any}>) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },
        deleteById: (id: number) => {
            delete state.value[id];
        },
    };

    const actions = {
        getAll: async () => {
            const {data} = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },
        create: async (item: {id: number; [key: string]: any}) => {
            const {data} = await postRequest(`${moduleName}`, item);
            if (!data) return;
            setters.setAll(data);
        },
        update: async (item: {id: number; [key: string]: any}) => {
            const {data} = await putRequest(`${moduleName}/${item.id}`, item);
            if (!data) return;
            setters.setAll(data);
        },
        delete: async (id: number) => {
            try {
                await deleteRequest(`${moduleName}/${id}`);
                setters.deleteById(id);
            } catch (error: any) {
                alert(error.response.data.message);
                destroyErrors();
                destroyMessage();
            }
        },
    };

    return {getters, setters, actions};
};
