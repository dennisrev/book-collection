import Overview from './pages/Overview.vue';
import Show from './pages/Show.vue';
import CreateBook from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import CreateReview from '../reviews/pages/Create.vue';

export const bookRoutes = [
    {path: '/', redirect: '/books'},
    {path: '/books', component: Overview, name: 'books.overview'},
    {path: '/books/:id', component: Show, name: 'books.show'},
    {path: '/books/create', component: CreateBook, name: 'books.create'},
    {path: '/books/:id/edit', component: Edit, name: 'books.edit'},

    {path: '/books/:id/reviews/create', component: CreateReview, name: 'reviews.create'},
];
