/* Array.prototype.map - Exercice 4

Ecrire une fonction getCirclesProperties, qui prend en entrée un tableau de nombres (entiers ou non),
représentant les rayons de cercles, et calcule, pour chacun, la circonférence et la surface de ces cercles.

Formules pour les calculs :
* Ciconférence  =  2 * Pi * rayon
* Diamètre      =  Pi * rayon * rayon

En JavaScript, la valeur de Pi est donnée par Math.PI.
Comme on n'a pas besoin d'une très grande précision en sortie,
il t'est demandé de ramener chaque valeur calculée à trois chiffres
après la virgule, en utilisant la méthode toFixed des nombres (Google est ton ami).

La fonction devra retourner, pour chaque rayon du tableau d'entrée, un objet ayant cette "forme":
{
  radius: R,
  circumference: C
  surface: S
}

où R est le rayon donné en entrée, C et S les valeurs que tu dois calculer.

Exemple de tableau d'entrée :

[1, 3, 4.5, 7]

Tableau de sortie correspondant (toFixed transforme les nombres en chaînes)

[
  {
    radius: 1,
    circumference: "6.283",
    surface: "3.142"
  },
  {
    radius: 2,
    circumference: "12.566",
    surface: "12.566"
  },
  {
    radius: 7,
    circumference: "43.982",
    surface: "153.938"
  },
  {
    radius: 11,
    circumference: "69.115",
    surface: "380.133"
  }
]
*/

function getCirclesProperties(radiuses) {
  return radiuses.map(obj => {
    const tamer = new Object()
      tamer.radius = obj;
      tamer.circumference = (2 * Math.PI * obj).toFixed(3);
      tamer.surface = (Math.PI * obj * obj).toFixed(3);
    
    return tamer
  })
}



// Ne pas modifier l'export
module.exports = getCirclesProperties;
