const tab = [1, 2, 3, 42]

const add = (tab, i) => {
    if (!tab[i])                        // si "!tab[i]" n'existe pas (! veux dire n'existe pas)
        return 0                        // on return 0
    else                                // sinon 
    return tab[i] + add(tab, i + 1)     // retourne le tableau en addictionnant tout les index "i"
}

console.log(add(tab, 0))