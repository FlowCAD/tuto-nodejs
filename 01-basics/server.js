let http = require('http')
let fs = require('fs')
let url = require('url')

const headerParam = {'Content-type': 'text/html; charset=utf-8'}
let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200, headerParam)
    let query = url.parse(request.url, true).query
    let name = query.name === undefined ? 'anonyme' : query.name
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err) {
            response.writeHead(404, headerParam)
            response.end('404 not found !!')
        } else {
            response.writeHead(200, headerParam)
            data = data.replace('{{ name }}', name)
            response.end(data)
        }
    })
})

server.listen(8080)