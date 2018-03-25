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

module.exports = App