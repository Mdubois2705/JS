const str = "douze"                   // const de type string (chaine de caractere)

String.prototype.bonjour = () => {    // cree un proto personaliser avec le nom "bonjour" et cree un function 
    return "treize"                   // retourne treize
}

console.log(                          // retourne const et proto 
    str,
    str.bonjour(),
)