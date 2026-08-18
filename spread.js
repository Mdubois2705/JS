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