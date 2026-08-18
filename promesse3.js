const tab = [1, 2, 3, 4]

const promise = (index) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(index * 2)
         }, 3000)
    })

const promises = Promise.all(tab.map(el =>
    promise(el)
))

promises
    .then(elements => {
        console.log(elements)
    } )

