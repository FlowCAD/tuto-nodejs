let demo = require('./hello')
let myApp = require('./app')

demo.hello()

let app = myApp.start(8080)
app.on('root', (response) => {
    response.write('Je suis à la racine')
})

demo.bye()