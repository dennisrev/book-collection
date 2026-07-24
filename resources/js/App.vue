<template>
    <nav>
        <div>
            <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink>
        </div>
        <div>
            <RouterLink :to="{name: 'books.create'}">Nieuw Boek</RouterLink>
        </div>
    </nav>
    <hr>
    <main>
            <RouterView></RouterView>
    </main>
</template>
