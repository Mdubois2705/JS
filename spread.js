import {add, sub} from './module.js'    // import les function du fichier "module.js"

console.log(add(1, 6))       // execute la function presente dans "module.js"
console.log(sub(1, 6))       // execute la function presente dans "module.js"

let medor = {
    name: "medor",
    age: 10,
    speed: 20,
}

let redmedor = {
    ...medor,           // "..." = spread recree une constante en gardant les valeur de la premiere ajoute les sienne et modifie les valeur en commun 
    name: "redmedor",
    age: 5,
    taille: 10,
}

console.log(medor)
console.log(redmedor)