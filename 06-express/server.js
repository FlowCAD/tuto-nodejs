let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')


// Template
app.set('view engine', 'ejs')


// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'My awesome secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))


// Routes
app.get('/', (req, res) => {
    if (req.session.error) {
        res.locals.error = req.session.error
        req.session.error = undefined
    }
    res.render('pages/index')
})

app.post('/', (req, res) => {
    if(!req.body.message) {
        req.session.error = "Il y a une erreur"
        res.redirect('/')
    }
    console.log(req.body)
})


app.listen(8080)