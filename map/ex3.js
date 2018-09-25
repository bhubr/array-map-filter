/* Array.prototype.map - Exercice 3

Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets.
Chaque objet a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com

La fonction getMoviesFreshness doit renvoyer un tableau contenant,
pour chaque objet d'entrée, la chaîne "NAME is a LABEL movie", où NAME
sera remplacé par le nom, et LABEL par une chaîne indiquant s'il est "rotten", "fresh",
ou "certified fresh", en fonction de la propriété `rating`.

Si `rating` est infériéur à 60, LABEL vaudra "rotten".
Si `rating` est compris entre 60 et 75 (inclus), LABEL vaudra "fresh".
Si `rating` est supérieur à 75, LABEL vaudra "certified fresh".

Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie: [
  'Crazy Rich Asians is a certified fresh movie',
  'Skyscraper is a rotten movie',
  'Leave No Trace is a certified fresh movie',
  'White Boy Rick is a fresh movie'
]

 */

function getMoviesFreshness(movies) {
}



// Ne pas modifier l'export
module.exports = getMoviesFreshness;
