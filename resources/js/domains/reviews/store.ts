import {storeModuleFactory} from '../../services/store';

export interface Review {
    id: number;
    review_text: string;
    book_id: number;
}

export const reviewStore = storeModuleFactory('reviews');
