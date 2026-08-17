let nb = 42
let index = 4                                        // index de base 4

while (index > 0) {                                  // while = boucle ( (index > 0) temps que "index et superieur as 0 reste dans la boucle") 
    console.log("je suis dans la boucle", index)
    index = index - 1                                // décrémente as la variable index -1 as chaque boucle 
}
console.log("je ne suis plus dans la boucle")        //quand la boucle arrive as 0 retourne ce console.log

for (let i = 4; i > 0; i = i - 1) {                  //for = boucle (i = 4 index = valeur 4 ) 
    console.log("je suis dans la boucle", i)         //( 1 > 0 temps que index est superieur as 0 la boucle coutinue )
}                                                    //( (i = i - 1) = i décrémente 1 as i as chaque boucle )
console.log("je ne suis plus dans la boucle")