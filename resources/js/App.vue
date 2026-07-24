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
    <h1>TO DO: AUTEURS MEEGEVEN IN HET OVERZICHT, anders werkt het toevoegen van een boek niet (doen op maandag 27 juli)</h1>
    <hr>
    <main>
            <RouterView></RouterView>
    </main>
</template>
