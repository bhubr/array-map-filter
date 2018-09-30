# Exercices sur map et filter

## Installation

* Cloner ce repo
* Dans le répertoire `array-map-filter`, lancer `npm install`

## Usage

* Il y a trois séries d'exercices, situées dans `map`, `filter`, et `filter-map`.
* L'ordre importe peu entre `map` et `filter`, mais `filter-map` vient en dernier.
* Pour lancer les tests: `npm test`
* Tous les tests sont désactivés au début, pour ne pas "polluer" le terminal avec des pages d'erreurs.
* Les tests se réactivent 1 par 1:

    * soit en remplaçant `xdescribe` par `describe`, dans le fichier de test correspondant à l'exercice sur lequel on travaille (par exemple, `tests/filter-map2.js` si on travaille sur `filter-map/ex1.js`).
    * soit plus simplement en lançant, depuis la racine du repo `array-map-filter`, `./enable SERIE NUMERO`, en remplaçant `SERIE` par `map`, `filter` ou `filter-map` et `NUMERO` par le n° de l'exercice. Par exemple, `./enable map 5` pour activer les tests du 5ème exercice de la série `map`
* On peut également les activer / désactiver tous d'un coup, via `./enableAll` et `./disableAll`
* L'avantage de procéder 1 par 1 est qu'après chaque test réussi, tu peux commit et push ton travail, et si Travis est configuré, un build se lancera avec les seuls tests activés.