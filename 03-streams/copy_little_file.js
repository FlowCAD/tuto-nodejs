let fs = require('fs')

fs.readFile('Red Hot Chili Peppers - By The Way.mp3', (err, data) => {
    if (err) throw err
    fs.writeFile('copy.mp4', data, (err) => {
        if (err) throw err
        console.log('Le fichier a bien été copié')
    })
})