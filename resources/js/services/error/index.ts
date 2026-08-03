import { computed, ref } from 'vue';

interface ErrorBag {
    [property: string]: string[];
}

const errorBag = ref<ErrorBag>({});
const message = ref('');

export const getErrorBag = computed(() => errorBag.value);
export const getMessage = computed(() => message.value);

export const getErrorBagByProperty = (property: string) => computed(() => errorBag.value[property]);

export const setErrorBag = (bag: ErrorBag) => (errorBag.value = bag);
export const setMessage = (newMesage: string) => {
    message.value = newMesage || 'Er is een fout opgetreden';
};

export const destroyErrors = () => (errorBag.value ={});
export const destroyMessage = () => (message.value ='');