const tab = [1, 3, 44]                   // [] cree un tableau 

for (let i = 0; tab[i]; i++) {           // let i = 0 (cree la variable index = 0) tab[i] (donne acces au tableau) i++ = ( index = index + 1)
                                         // donc la boucle vas tourner et renvoyer les valeur avec +1 as chaque fois si il ny as pas de valeur
                                         //retourne undefined sinon la valeur dans le tableau

    console.log(i, tab[i])               //i (retourne l'index du tableau) tab[i] (retourne la valeur du tableau)
}

console.log(tab[2])                     // [2] (acceder as l'index du tableau desiré)

//a++ = ( a = a + 1)
//a-- = ( a = a - 1)
// == (egale)
// (!==) diferent de ...