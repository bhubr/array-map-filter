/* Array.prototype.filter - Exercice 4

Ecrire une fonction filterOnPrice, qui attend 2 arguments:
1. Un tableau d'objets représentant des produits, chacun ayant deux propriétés:
  - name
  - price
2. Un prix maximum

La fonction doit renvoyer un tableau ne contenant que les produits ne dépassant pas le prix
maximum.

Exemple d'entrée:

1. tableau de produits:
[
  { name: 'iPhone X', price: 1159 },
  { name: 'Xiaomi Mi A2', price: 209 },
  { name: 'Samsung Galaxy Note 9', price: 992 },
  { name: 'Huawei P20', price: 480 },
  { name: 'Huawei P20 Pro', price: 649 }
]
2. prix maximum: 500

Sortie attendue:
  [
    { name: 'Xiaomi Mi A2', price: 209 },
    { name: 'Huawei P20', price: 480 }
  ]
 */

function filterOnPrice(products, maxPrice) {
}

// Ne pas modifier l'export
module.exports = filterOnPrice;
