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
app.use(require('./middlewares/flash'))


// Routes
app.get('/', (req, res) => {
    console.log(req.session)
    res.render('pages/index')
})

app.post('/', (req, res) => {
    if(!req.body.message) {
        req.flash('error', "Le message est vide !")
        res.redirect('/')
    }
    console.log(req.body)
})


app.listen(8080)