const tab = [1, 2 , 3, 42]         // cree le tableau

tab.forEach(elem => {              // "tab" appel le tableau "forEach" pour chaque caractere du tableau cree un element "elem" et tout sa est un function 
    console.log(elem)              // log les element un par un 
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nt = tab.map(elem => {       // cree une const new tableau "const nt" appelle le tableau "tab" et ajoute "map" pour selectionner chaque valeur du tableau
    return elem + 1                // retourne chaque ellement du tableau avec + 1 
})

console.log(nt)                    // log le tableau final 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nt1 = tab.filter(elem => {   // comme au dessus. filter vas enlever les valeur superieur as 10 
    return elem < 10               // grace as "< 10"
})

console.log(nt1) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

