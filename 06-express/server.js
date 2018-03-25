let app = require('express')()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(8080)