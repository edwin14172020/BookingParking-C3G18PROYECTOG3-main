require('dotenv').config()
//Configuracion del servidor
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors'); // habilita la conexion desde cualquier fuente
const passport = require('passport')
require('./lib/passport');
const session = require('express-session');
const moment = require('moment');
moment.locale('es')
const flash = require('connect-flash');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:8080']
}
app.use(cors(corsOptions));
app.sess = session({
    secret: 'rprji2BuRNbPpWp95hP4xFCGLKJfgaiFHBVMNoqa6564khbAdesWMPgnG6FvFOzyBAI3xH2dgLXxX63HkSZUU',
    name: 'GYTH0JgfJHaeb3YmR',
    resave: false,
    cookie: {secure: false, maxAge: 28800000},
    saveUninitialized: false,
    rolling: true
})
app.use(app.sess)
app.use(passport.initialize());
app.use(passport.session());
//app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.errors = req.flash("error");
    res.locals.successes = req.flash("success");
    next()
})
//Conexion a MongoDB
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://larcila:${process.env.DBPASS}@cluster0.bp4b6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to database')
}).catch((err) => console.error(err.message))
//Definir las rutas
app.use('/api', require('./routes/routes'))
//Iniciar servidor
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
