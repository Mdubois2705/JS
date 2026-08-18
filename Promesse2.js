const promise = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => {
           console.log('bonsoir')     // Toujours affiché après 3 secondes
           reject(42)                 // Cette fois on REJETTE la promesse avec 42
                                      // (= la promesse "échoue" volontairement)
        }, 3000)
    })

promise()
    .then(elem => {                   // .then() ne sera JAMAIS exécuté ici,
        console.log('boujour', elem)  // car la promesse est rejetée, pas résolue
})
    .catch(err => {                   // .catch() intercepte les erreurs/rejets
        console.log(err)              // On affiche l'erreur, ici la valeur 42
    })