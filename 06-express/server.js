let express = require('express')
let app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/index', {test: 'Coucou !'})
})

app.listen(8080)