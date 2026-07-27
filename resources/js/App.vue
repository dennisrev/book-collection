<template>
    <nav>
        <div align="center">
            <RouterLink :to="{name: 'books.overview'}">Overzicht boeken</RouterLink>
        </div>
        <div align="center">
            <RouterLink :to="{name: 'books.create'}">Nieuw boek toevoegen</RouterLink>
        </div>
        <div align="center">
            <RouterLink :to="{name: 'authors.overview'}">Overzicht auteurs</RouterLink>
        </div>
    </nav>
    <hr>
    <main>
            <RouterView></RouterView>
    </main>
</template>
