const tab = [1, 2, 3, 4, 5, 6, 7]

const func = () => console.log('bonsoir')

tab.forEach(() => {                      // les boucle prenne en compte de timer que la premiere fois
    setTimeout(func, 3000)               // donc le 'bonsoir les gens' apparait puis apres 3s la function "func" lance les 'bonsoir' jusqua la fin du tableau = 8x
})

setTimeout(func, 3000)                   // "setTimeout" permet de decaler dans le temps le resultat de la function "func" de 3s = "3000"

console.log('bonsoir les gens')          // donc le code est lu entierement et affiche 'bonsoir les gens' et apres 3s 'bonsoir'