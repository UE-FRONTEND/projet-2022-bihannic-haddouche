# Projet Front

## Members: HADDOUCHE Mokrane , BIHANNIC Lucas

### TP group : 
- [ ] TPA41
- [ ] TPA42
- [x] TPA51
- [ ] TPA52
- [ ] Not selected


### Présentation de l'application :

Mot Mystère est un jeu de lettre développé par notre équipe en JavaScript, VueJS, NodeJS, Html, CSS où Vous avez 10 minutes et seulement 6 tentatives pour deviner un mot de 5 lettres. 
En démarrant l'application on a deux choix de boutons : consulter l'historique et démarrer une partie. 
Après avoir cliquer sur ce dernier, un chronomètre de 10 minute se lance, un clavier s'affiche avec un champs de texte du
mot, le nombre de tentatives restantes, les boutons valider, abandonner et revenir à l'accueil. L'utilisateur doit alors entrer
les lettres correspondantes sur son clavier ou sur le clavier virtuelle. Le mot cherché doit contenir 5 lettres et doit
faire partie d'une liste bien définie récupéré via une api, si le mot entré ne réponds pas à ces critères alors
l'application affiche "le mot n'est pas dans le dictionnaire". Sinon le mot est inscrit dans la première ligne, les lettres
deviennent verte si elles sont correct et à la bonne place, jaune si elles appartiennent au mot mais ne sont pas à la
bonne place et rouge si elles n'appartiennent pas au mot. Si l'utilisateur abandonne, ne trouve pas le mot avant le
temps impartie, le nombre de tentatives restantes ou veut revenir à l'accueil alors s'affiche le message "Dommage ! Réessayez". 
Sinon l’utilisateur trouve le mot, gagne la partie et le message victoire est affiché. 
Après la partie, l’utilisateur aura deux choix de boutons : Revenir à l’accueil et consulter les statistiques (l'historique). 
En appuyant sur le bouton statistiques, il peut consulter ses statistiques général (Temps moyen de jeu, Nombre de tentatives moyenne, % de victoires) ou 
l'historique de ses dernières parties (Date de la partie, Nombre de tentative, Temps de jeu, Résultat, Mot à deviner).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run tests
```
npm run test
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
