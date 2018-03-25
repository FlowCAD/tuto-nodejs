let demo = require('./hello')
let myApp = require('./app')
let _ = require('lodash')

demo.hello()
console.log(_.partition([1, 2, 3, 4], n => n % 2))

let app = myApp.start(8080)
app.on('root', (response) => {
    response.write('Je suis à la racine')
})

demo.bye()