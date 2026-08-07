<template>
    <nav>
        <div align="center">
            <RouterLink :to="{name: 'books.overview'}">
                <button type="button">Overzicht boeken</button>
            </RouterLink>
            <RouterLink :to="{name: 'books.create'}">
                <button type="button">Boek toevoegen</button>
            </RouterLink>
            <RouterLink :to="{name: 'authors.overview'}">
                <button type="button">Overzicht auteurs</button>
            </RouterLink>
            <RouterLink :to="{name: 'authors.create'}">
                <button type="button">Auteur toevoegen</button>
            </RouterLink>
        </div>
    </nav>
    <main>
        <RouterView></RouterView>
    </main>
</template>
