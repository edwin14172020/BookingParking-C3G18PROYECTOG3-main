const mongoose = require('mongoose')
// Estete paso se crea los modelos, indicando los datos que deseamos guardar en la base de datos y el tipo de dato a ser almacenado
const Schema = mongoose.Schema({
    username: String,
    password: String,
    roles: String
})

module.exports = mongoose.model('Users', Schema)