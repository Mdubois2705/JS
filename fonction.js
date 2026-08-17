const add = (a, b) => {             //const add (ajoute un nom de function) a, b (argument de la fonction) => (dire que c'est une fonction)
    return a + b                    //retourne a + b 
}

const test = add (1, 2)              // appek la fonction pour addictioner 1 et 2
const test1 = add (2, 6)             // same 


console.log (add( 1, 2 ))           //add (appel la fonction) 1, 2 (addictionne l'argument)

console.log (add( 4, 8 ))           //add (appel la fonction) 4, 8 (addictionne l'argument)

console.log (add( '1', '2' ))       //add (appel la fonction) '1', '2' (colle les 2 chaine de caractere (concatené))

console.log (add(test, test1))      //add (appel la fonction) test, test1 (appel la function pour addictionner les 2 const test et test1 puis readdictioner le resultat de test et test1 )