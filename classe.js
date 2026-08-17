
Array                               // tableau 
Array.isArray                       // + la valeur renvoie false ou true si c'est bien un tableau 
String                              // chaine de caractere
toString                            // convertie en chaine de caractere
Number                              // nombre
Object                              // a: b: c: est un objet 
//typeof                            // permet de savoir le type exemple (const nb1 = 1 / console.log(typeof nb1) ) cela renvoie number

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const names = {
    a: 'Antoine',
    b: 'Guillaume',
    c: 'Marie',
}

console.log(Object.keys(names))     // le log me retourne les clés "a: b: c:" de l'object "names"
console.log(Object.values(names))   // le log me retourne les valeurs "Antoine / Guillaume / Marie " de l'object "names"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nb1 = 1
const nb2 = 67

console.log(nb1.toString() + nb2.toString())   //retourne les valeur de "nb1" et "nb2" en chaine de caractere et les colles

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const arr = [1, 3, 'a']         // cree le tableau 
const newArr = arr.concat('b')

arr.push('b')                   // ajoute une valeur au tableau meme si c'est une const
//arr = [2, 3]                  // cela ne fonctione pas car c'est un constant au debut 

console.log(                    // log le tableau 
    arr,                        // retourne "arr" avec les push en plus 
    newArr,                     // retourne un tableau en plus avec le push 
    arr.indexOf('a')            // retourne l'index de "a" dans le tableau (renvoie -1 si la valeur n'est pas presente)
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Math)               // retourne toute les functions mathematiques disponibles