let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let Message = require('./models/message')


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
    Message.all( (messages) => {
        res.render('pages/index', {messages: messages})
    })
})

app.post('/', (req, res) => {
    console.log(req.body)
    if(!req.body.message) {
        req.flash('error', "Le message est vide !")
        res.redirect('/')
    } else {
        Message.create(req.body.message, () => {
            req.flash('success', "Message envoyé !")
            res.redirect('/')
        })
    }
})


app.listen(8080)