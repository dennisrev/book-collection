import ShowBook from "../books/pages/Show.vue";
import Edit from "./pages/Edit.vue";

export const reviewRoutes = [
    {path: '/books/:id', component: ShowBook, name: 'books.show'},
    {path: '/books/:bookId/reviews/:reviewId/edit', component: Edit, name: 'reviews.edit'},
];