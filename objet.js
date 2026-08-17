const obj = {             // {} (accollade directement apres = cree un object)
    a: 1,                 // remplie l'objet de valeur
    b: 47,               
    c: "Hello world",     // chaine de caractere dans l'objet
    d: [1, 2, 45],        // cree un tableau dans l'objet
    e: (a, b) => {        // cree un function dans l'object
        return a / b     
    }, 
}

console.log(obj.a)        // log le "a" de l'objet
console.log(obj.b)
console.log(obj.c)
console.log(obj.d[2])     // log le "d" de l'objet et vas chercher l'index 2 car c'est un tableau
console.log(obj.e(4, 2))  // log le "e" de l'object er appel la function (a / b = "a" diviser par "b")