# express-template
template concernant la création d'un server express et l'organisation des dossiers

## /!\ A LIRE AVANT TOUTE CHOSE /!\

### Et oui, encore et toujours de la lecture...

Ceci étant mit sur un repo github, pour utiliser ce template vous devrez malheureusement copier/coller à la main les fichiers et créer vous même les dossiers.
En effet le fait de devoir cloner le challenge github ne permettra pas de cloner ce repo (cela risque de créer maints conflits au moment d'un push).
Je vais réfléchir a des alternatives (script bash ou js).

Le premier dossier 'server_only' propose seulement l'essentiel, c'est à dire un serveur écoutant sur le port 3000 avec une architecture de dossier très basique.

Le second dossier 'server_with_architecture' vous propose un server fonctionnant sur le port 3000 avec en plus déjà une architecture de dossier (qu'il faudra peut-être adapter en fonction des challenges).

note: ceci est bien évidemment une vision personnelle de l'architecture d'un projet, et ne consiste en aucun cas en une solution qui fonctionne en toute situation.

### A propos des packages

     server_only : 'express' et 'node-dev'
     server_with_architecture : 'express' 'ejs' et 'node-dev'

### Install des packages

Cependant pour pouvoir utiliser tout les modules installés il y a 2 options:

- Première option:
    - cloner le repo du challenge
    - créer un package.json à la racine du challenge et copier le contenu du fichier package.json de ce repo ci
    - ouvrir un terminal à la racine du challenge
    - installer les dépendances du package.json précédemment copié avec 'npm install'
    - il vous restera à copier le contenu d'app.js à la racine et de créer un dossier de modules personnels dans lequel copier sever.js !
    - pour server_with_architecture, les dossiers/fichiers contenant du code sont :
       * app.js
       * les fichiers dans project_modules (router.js et server.js)
       * le dossier views et ses fichiers (index.ejs, et le dossier partials avec footer.ejs, header.ejs)


- Seconde option:
    - cloner le repo du challenge
    - ouvrir une console de commande à la racine du challenge
    - faire un *npm init* (ou *npm init -y*)
    - installer manuellement les packages (précisés plus haut) avec 'npm install nomDuPackage'

### Le mot de la fin

J'essaierai d'actualiser ce repo à chaque fin de saison, n'hésitez pas à me mp si besoin !