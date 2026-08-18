
// On crée une fonction appelée `promise` qui reçoit un nombre `index`
const promise = (index) =>
    // On crée une promesse qui va se résoudre plus tard
    new Promise((resolve, reject) => {
        // On attend 3 secondes avant d'exécuter ce code
        setTimeout(() => {
            // Quand le délai est terminé, on retourne le résultat `index * 2`
            resolve(index * 2)
        }, 3000)
    })

// On crée une fonction asynchrone appelée `test`
const test = async () => {
    // On attend que la promesse se termine, puis on récupère le résultat
    const value = await promise(10)

    // On affiche la valeur dans la console
    console.log(value)
}

// On lance la fonction `test`
test()