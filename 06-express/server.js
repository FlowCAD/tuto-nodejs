let express = require('express')
let app = express()
let bodyParser = require('body-parser')


// Template
app.set('view engine', 'ejs')


// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// Routes
app.get('/', (req, res) => {
    res.render('pages/index')
})

app.post('/', (req, res) => {
    if(!req.body.message) {
        res.render('pages/index', {error: "Message vide"})
    }
    console.log(req.body)
})


app.listen(8080)