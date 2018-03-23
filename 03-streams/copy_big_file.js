let fs = require('fs')

let file = 'Red Hot Chili Peppers - By The Way.mp4'
fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.WriteStream('copy.mp4')
    read.on('data', (chunk) => {
        progress += chunk.length
        console.log(`Lecture à ${Math.round(100 * progress / total)} %`)
    })

    read.pipe(write)
    read.on('end', () => {
        console.log('Fin de lecture')
    })
    write.on('finish', () => {
        console.log('Fichier copié !')
    })
})