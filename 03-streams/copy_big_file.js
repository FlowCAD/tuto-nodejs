let fs = require('fs')

let file = 'Red Hot Chili Peppers - By The Way.mp4'
fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    read.on('data', (chunk) => {
        progress += chunk.length
        console.log(`Lecture à ${(progress / total)*100} %`)
    })
    
    read.on('end', () => {
        console.log('fin de lecture')
    })
})