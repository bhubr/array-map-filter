/* Array.prototype.map - Exercice 2

Ecrire une fonction getFoodCategories qui reçoit comme un argument un tableau
d'objets.
Chaque objet a deux propriétés:
  - `food` le nom d'un produit alimentaire
  - `isVegetarian` un booléen indiquant si le produit convient aux végétariens

La fonction getFoodCategories doit renvoyer un tableau contenant,
pour chaque objet d'entrée:
- la chaîne "FOOD is suitable for vegetarians"
OU
- la chaîne "FOOD is not suitable for vegetarians"
en fonction de la valeur de la propriété `isVegetarian`, en remplaçant FOOD
par le nom du produit

Exemple d'entrée:
  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ]
En sortie: [
  'Bacon is not suitable for vegetarians',
  'Sausage is not suitable for vegetarians',
  'Tofu is suitable for vegetarians',
  'Chick Pea is suitable for vegetarians'
]

 */

function getFoodCategories(foods) {
  return foods.map(aliment => {
    if (aliment.isVegetarian === true){
      return (aliment.food + ' is suitable for vegetarians')
      
    } else {
      return (aliment.food + ' is not suitable for vegetarians')
    }



  })
}



// Ne pas modifier l'export
module.exports = getFoodCategories;
