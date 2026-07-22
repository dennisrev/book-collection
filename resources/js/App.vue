<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink>
        <RouterLink :to="{name: 'books.create'}">Nieuw Boek</RouterLink>
    </nav>
    <main>
        <RouterView></RouterView>
    </main>
</template>
