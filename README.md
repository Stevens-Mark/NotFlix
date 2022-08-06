<p align="center">
  <img src="/public/notflixScreenshot.png" />
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d5f62fc-c010-49cb-8c4f-ed1d3fd5bee4/deploy-status)](https://app.netlify.com/sites/notflixstevensmark/deploys)

# PROJECT PERSONAL *(English)*

Open website at [Notflix](https://notflixstevensmark.netlify.app/)

# NOTFLIX - A NetFlix Clone

## Objective

After seeing numerous NetFlix clones on the internet I thought I would try to build my own version. I have to say I was inspired by the version done by Davide Mandelli, Th3Wall. Which is an amazing version !!
I wanted to avoid using too many libraries, so opted to do the animations with Sass rather than motion, spring etc... 
But, in the end, I did use react-slick for the slidder, but unfortunately there are a few accessibility issues which I have tried to minimise as much as possible. I don't think it was intended to have navigational buttons inside for example... Also, when I checked with "AXE" it throws up some issues that are not totally correct. Although my "modal focus trap" worked, I finally chose to use Focus-trap-react as I found mine had a few problems with the animation component that allows exit animations when unmounting a component). And finally, I used "movie-trailer" to get trailers from Youtube, instead of the videos held in the TMDB datbase, but maybe I will change this in the future, just to compare...
Last point, although I could have used Redux for the state management, I chose to use useContext instead, simply because I haven't really used it much & thought there was no need to use Redux on this project...
But as the project has progressed & I have added more features, I think the use of Redux would have been better. This project has highlighted the importance of spending some time thinking about potential future features, in order to try to mimise design/feature implementation problems later.

## Features
- [x] Display movies, tv shows, popular & watch list
- [x] If user clicks on Genre heading a link appears to be able to view more movies ot tv shows for that genre
- [x] Search movies and tv shows
- [x] Add/Remove to/from "My Wish List"
- [x] A detail modal with more information about the movie or TV show selected by the user
- [x] A Video modal showing a "trailer" (if available) when selected by the user
- [x] Use of React hooks and custom hooks
- [x] Favourites list persised in local storage for ease of demo
- [x] Responsive layout
- [x] Swipeable movie and tv shows list
- [x] Database courtesy of [TMDB API](https://www.themoviedb.org/)

## Limitations / Areas for improvement
- [x] I have not added all the genres to the site (for example: Romance, History, Mystery, Reality, Talk, Western...).
- [x] When navigating between the different pages the data is reload when a page is revisited (new API calls). Thus the same data is downloaded each time and not very efficient. 


# Installation *(English)*

## Prerequisites
- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## Dependencies
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts](https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [SaSS](https://sass-lang.com/) Version 1.46.0
- [Axios](https://axios-http.com/) Version 0.27.2
- [React-slick](https://react-slick.neostack.com/) Version 0.29.0
- [Slick-carousel](https://www.npmjs.com/package/slick-carousel) Version 1.8.1
- [Focus-trap-react](https://www.npmjs.com/package/focus-trap-react) Version 9.0.2
- [Movie Trailer](https://www.npmjs.com/package/movie-trailer) Version 2.1.0

## Installing and running the project
- Clone the repository onto your computer :
  `git clone https://github.com/Stevens-Mark/NotFlix.git`

- Inside this repository, install the packages/dependencies :
 `npm install`

- Run the Api:
 `npm start`

The App runs on http://localhost:3000/



## Notes
- This is a project that I am still in the process of "completing" (saying that, I think one could do this project forever, adding new features all the time)...
- More to be added......

## Credits
Credit for the original code for the "Notflix" intro go to - [Claudio Bonfait](https://codepen.io/claudio_bonfati/pen/mdryxPv)

Credit for the "Notflix" intro sound goes to - [Davide Mandelli, Th3Wall](https://github.com/Th3Wall)



<p align="center">
  <img src="/public/notflixScreenshot.png" />
</p>


# PROJET PERSONNEL *(Français)*

Ouvrir le site web à [Notflix](https://notflixstevensmark.netlify.app/)

# NOTFLIX - Un clone de NetFlix

## Objectif

Après avoir vu de nombreux clones de NetFlix sur Internet, je me suis dit que j'allais essayer de construire ma propre version. Je dois dire que j'ai été inspiré par la version faite par Davide Mandelli, Th3Wall. Qui est une version étonnante !
Je voulais éviter d'utiliser trop de bibliothèques, j'ai donc choisi de faire les animations avec Sass plutôt qu'avec motion, spring etc... 
Mais, au final, j'ai utilisé react-slick pour le slidder, mais malheureusement il y a quelques problèmes d'accessibilité que j'ai essayé de minimiser autant que possible. Je ne pense pas qu'il était prévu d'avoir des boutons de navigation à l'intérieur par exemple... De plus, lorsque j'ai vérifié avec "AXE", cela a donné lieu à des problèmes qui ne sont pas totalement corrects. Bien que mon "modal focus trap" ait fonctionné, j'ai finalement choisi d'utiliser Focus-trap-react car j'ai constaté que le mien avait quelques problèmes avec le composant d'animation qui permet des animations de sortie lors du démontage d'un composant). Et enfin, j'ai utilisé "movie-trailer" pour obtenir les bandes-annonces de Youtube, au lieu des vidéos contenues dans la base de données TMDB, mais je changerai peut-être cela à l'avenir, juste pour comparer...
Dernier point, bien que j'aurais pu utiliser Redux pour la gestion des états, j'ai choisi d'utiliser useContext à la place, simplement parce que je ne l'ai pas beaucoup utilisé et que je pensais qu'il n'y avait pas besoin d'utiliser Redux sur ce projet...
Mais comme le projet a progressé & j'ai ajouté plus de fonctionnalités, je pense que l'utilisation de Redux aurait été meilleure. Ce projet a mis en évidence l'importance de passer un peu de temps à penser aux futures fonctionnalités potentielles, afin d'essayer de minimiser les problèmes de conception et de mise en œuvre des fonctionnalités plus tard.

## Fonctionnalités

- [x] Afficher les films, les séries télévisées, les films populaires et les listes de visionnage.
- [x] Si l'utilisateur clique sur l'intitulé du genre, un lien apparaît pour lui permettre de voir d'autres films ou émissions de télévision de ce genre.
- [x] Recherche de films et de séries TV.
- [x] Ajouter/supprimer à/de "Ma liste de souhaits".
- [x] Une modale de détail avec plus d'informations sur le film ou la série TV sélectionné(e).
- [x] Une modale vidéo montrant une "bande-annonce" (si disponible) lorsqu'elle est sélectionnée par l'utilisateur.
- [x] Utilisation de hooks React et de hooks personnalisés.
- [x] La liste de favoris est conservée dans un stockage local pour faciliter la démo.
- [x] Mise en page réactive.
- [x] Liste de films et d'émissions de télévision pouvant être glissée dans l'écran.
- [x] Base de données fournie par [TMDB API](https://www.themoviedb.org/)

## Limites / Points à améliorer
-[x] Je n'ai pas ajouté tous les genres au site (par exemple : Romance, Histoire, Mystère, Réalité, Discussion, Western...).
- [x] Lors de la navigation entre les différentes pages, les données sont rechargées lorsqu'une page est réactualisée (nouveaux appels API). Ainsi, les mêmes données sont téléchargées à chaque fois, ce qui n'est pas très efficace. 


# Installation *(français)*

## Prérequis
- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## Dépendances
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts](https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [SaSS](https://sass-lang.com/) Version 1.46.0
- [Axios](https://axios-http.com/) Version 0.27.2
- [React-slick](https://react-slick.neostack.com/) Version 0.29.0
- [Slick-carousel](https://www.npmjs.com/package/slick-carousel) Version 1.8.1
- [Focus-trap-react](https://www.npmjs.com/package/focus-trap-react) Version 9.0.2
- [Movie Trailer](https://www.npmjs.com/package/movie-trailer) Version 2.1.0


## Installation et exécution du projet

- Clonez le référentiel sur votre ordinateur :
  `git clone https://github.com/Stevens-Mark/NotFlix.git`

- Dans ce dépôt, installez les paquets/dépendances :
 `npm install`

- Exécutez l'Api :
 `npm start`

L'application fonctionne sur http://localhost:3000/


## Notes
- C'est un projet que je suis toujours en train de "terminer" (en disant cela, je pense qu'on pourrait faire ce projet pour toujours, en ajoutant de nouvelles fonctionnalités tout le temps)...
- Plus à ajouter......

## Crédits
Le crédit pour le code original de l'intro de "Notflix" revient à - [Claudio Bonfait](https://codepen.io/claudio_bonfati/pen/mdryxPv)

Le crédit pour le son d'intro de "Notflix" revient à - [Davide Mandelli, Th3Wall](https://github.com/Th3Wall)