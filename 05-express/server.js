let app = require('express')()

app.get('/', (req, res) => {
    res.send('Coucou la racine !')
})

app.get('/demo', (req, res) => {
    res.send('Coucou la démo !')
})

app.listen(8080)