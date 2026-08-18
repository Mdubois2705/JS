const tab = [1, 2, 3, 42]

try {                                 // "try" = essayer le variable
    if (tab [4])                      // si "tab" appel du tableau as l'index definie (4) 
        console.log ("ok")            // log "ok"
    else                              // sinon
        throw new Error ("wrong")     // "throw" envoie une nouvelle "Error Wrong"
} catch (err) {                       // 
    console.log (err)
}

console.log ("ca marche encore !")    // verifier que le script ne s'arrete pas 