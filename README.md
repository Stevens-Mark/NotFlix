<p align="center">
  <img src="/public/notflixScreenshot.png" />
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d5f62fc-c010-49cb-8c4f-ed1d3fd5bee4/deploy-status)](https://app.netlify.com/sites/notflixstevensmark/deploys)

# PROJECT PERSONAL *(English)*

Open website at [Notflix](https://notflixstevensmark.netlify.app/)

# NOTFLIX - A NetFlix Clone

## Objective

After seeing numerous NetFlix clones on the internet I thought I would try to build my own version. I have to say I was inspired by the version done by Davide Mandelli, Th3Wall. Which is an amazing version !! Check it out
I have tried to avoid using too many libraries, so opted to do the animations with Sass rather than motion, spring etc... 
But, I did use react-slick for the slidder, but unfortunately there are a few accessibility issues. I don't think it was intended to have navigational buttons inside for example... Also, when I checked with "AXE" it throws up some issues that are not totally correct. Although my "modal focus trap" worked, I finally chose to use Focus-trap-react as I found mine had a few problems with the modal animation component that I used to allow animations when unmounting the modal.
And finally, although I could have used Redux for the state management, I also opted for useContext instead, simply because I haven't really used it much & thought there was no need to use Redux on this project...

## Features
- [x] Display movies, tv shows, popular & watch list
- [x] Search movies and tv shows
- [x] Add/Remove to/from "My Wish List"
- [x] A detail modal with more information about the movie or TV show selected by the user
- [x] Use of React hooks and custom hooks
- [x] Favourites list persised in local storage for ease of demo
- [x] Responsive layout
- [x] Swipeable movie and tv shows list
- [x] Database courtesy of [TMDB API](https://www.themoviedb.org/)

## Limitations / Areas for improvement
- [x] I have not added all the genres to the site (for example: Romance, History, Mystery, Reality, Talk, Western...).
- [x] Only the first page is shown for each genre (20 items) - need to add ability to load more pages.
- [x] When navigating between the different pages the data is reload when a page is revisted (new API calls). Thus the same data is downloaded each time and not very efficient. 


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


# PROJET PERSONNEL *(Fran??ais)*

Ouvrir le site web ?? [Notflix](https://notflixstevensmark.netlify.app/)

# NOTFLIX - Un clone de NetFlix

## Objectif

Apr??s avoir vu de nombreux clones de NetFlix sur Internet, je me suis dit que j'allais essayer de construire ma propre version. Je dois dire que j'ai ??t?? inspir?? par la version faite par Davide Mandelli, Th3Wall. C'est une version incroyable ! Regardez-la
J'ai essay?? d'??viter d'utiliser trop de biblioth??ques, j'ai donc choisi de faire les animations avec Sass plut??t qu'avec motion, spring etc... 
Mais, j'ai utilis?? react-slick pour le slidder, mais malheureusement il y a quelques probl??mes d'accessibilit??. Je ne pense pas qu'il ??tait pr??vu d'avoir des boutons de navigation ?? l'int??rieur par exemple... De plus, lorsque j'ai v??rifi?? avec "AXE", cela a donn?? lieu ?? des probl??mes qui ne sont pas totalement corrects. Bien que mon "modal focus trap" ait fonctionn??, j'ai finalement choisi d'utiliser Focus-trap-react car j'ai constat?? que le mien avait quelques probl??mes avec le composant d'animation de la modale que j'ai utilis?? pour permettre les animations lors du d??montage de la modale.
Et enfin, bien que j'aurais pu utiliser Redux pour la gestion de l'??tat, j'ai ??galement opt?? pour useContext ?? la place, simplement parce que je ne l'ai pas vraiment utilis?? et que je pensais qu'il n'y avait pas besoin d'utiliser Redux sur ce projet...

## Fonctionnalit??s

- [x] Afficher les films, les s??ries t??l??vis??es, les films populaires et les listes de visionnage
- [x] Recherche de films et de s??ries TV
- [x] Ajouter/supprimer ??/de "Ma liste de souhaits".
- [x] Une modale de d??tail avec plus d'informations sur le film ou la s??rie TV s??lectionn??(e).
- [x] Utilisation de hooks React et de hooks personnalis??s
- [x] La liste de favoris est conserv??e dans un stockage local pour faciliter la d??mo.
- [x] Mise en page r??active
- [x] Liste de films et d'??missions de t??l??vision pouvant ??tre gliss??e dans l'??cran.
- [x] Base de donn??es fournie par [TMDB API](https://www.themoviedb.org/)

## Limites / Points ?? am??liorer
- x] Je n'ai pas ajout?? tous les genres au site (par exemple : Romance, Histoire, Myst??re, R??alit??, Discussion, Western...).
- x] Seule la premi??re page est affich??e pour chaque genre (20 articles) - il faut ajouter la possibilit?? de charger plus de pages.
- x] Lors de la navigation entre les diff??rentes pages, les donn??es sont recharg??es lorsqu'une page est r??actualis??e (nouveaux appels API). Ainsi, les m??mes donn??es sont t??l??charg??es ?? chaque fois, ce qui n'est pas tr??s efficace. 


# Installation *(fran??ais)*

## Pr??requis
- [NodeJS](https://nodejs.org/en/)  Version 16.13.0 
- [NPM](https://www.npmjs.com/package/npm) Version 7.6.0
- [Visual Studio Code](https://code.visualstudio.com/) or another IDE of your choice

## D??pendances
- [React](https://reactjs.org/) Version 17.0.2
- [React-router-dom](https://www.npmjs.com/package/react-router-dom/v/5.2.0) Version 5.2.0
- [React-scripts](https://www.npmjs.com/package/react-scripts) Version 5.0.0
- [Prop-types](https://www.npmjs.com/package/prop-types) Version 15.8.1
- [SaSS](https://sass-lang.com/) Version 1.46.0
- [Axios](https://axios-http.com/) Version 0.27.2
- [React-slick](https://react-slick.neostack.com/) Version 0.29.0
- [Slick-carousel](https://www.npmjs.com/package/slick-carousel) Version 1.8.1
- [Focus-trap-react](https://www.npmjs.com/package/focus-trap-react) Version 9.0.2


## Installation et ex??cution du projet

- Clonez le r??f??rentiel sur votre ordinateur :
  `git clone https://github.com/Stevens-Mark/NotFlix.git`

- Dans ce d??p??t, installez les paquets/d??pendances :
 `npm install`

- Ex??cutez l'Api :
 `npm start`

L'application fonctionne sur http://localhost:3000/


## Notes
- C'est un projet que je suis toujours en train de "terminer" (en disant cela, je pense qu'on pourrait faire ce projet pour toujours, en ajoutant de nouvelles fonctionnalit??s tout le temps)...
- Plus ?? ajouter......

## Cr??dits
Le cr??dit pour le code original de l'intro de "Notflix" revient ?? - [Claudio Bonfait](https://codepen.io/claudio_bonfati/pen/mdryxPv)

Le cr??dit pour le son d'intro de "Notflix" revient ?? - [Davide Mandelli, Th3Wall](https://github.com/Th3Wall)