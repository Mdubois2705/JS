const promise = () =>              // On déclare une fonction fléchée "promise", 
                                    // qui ne prend aucun paramètre
    new Promise ((resolve, reject) => {   
                                    // Elle retourne une nouvelle Promise.
                                    // "resolve" et "reject" sont les deux fonctions
                                    // fournies par JS pour terminer la promesse
                                    // (succès ou échec)
        setTimeout(() => {         // On lance un minuteur (timer)
          console.log('bonsoir')  // Après le délai, on affiche "bonsoir" dans la console
           resolve(42)             // Puis on résout la promesse avec la valeur 42
                                    // (= la promesse est "tenue", elle a réussi)
        }, 3000)                   // Le délai est de 3000 ms = 3 secondes
    })

promise().then(elem => {           // On appelle la fonction "promise" (qui crée
                                    // et retourne la Promise), puis on utilise .then()
                                    // pour dire "quand la promesse est résolue, fais ça"
     console.log('boujour', elem)  // On affiche "boujour" suivi de la valeur reçue
                                    // (elem = 42, la valeur passée à resolve)
})
    
  