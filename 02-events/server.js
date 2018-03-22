let http = require('http')
let url = require('url')
const EventEmitter = require('events')

const headerParam = {'Content-type': 'text/html; charset=utf-8'}

let App = {
    start: (port) => {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response) => {
            response.writeHead(200, headerParam)
            if (request.url === '/') {
                emitter.emit('root', response)
            }
            response.end()
        }).listen(port)
        return emitter
    }
}
let app = App.start(8080)
app.on('root', (response) => {
    response.write('Je suis à la racine')
})