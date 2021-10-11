const mongoose = require('mongoose')
// Estete paso se crea los modelos, indicando los datos que deseamos guardar en la base de datos y el tipo de dato a ser almacenado
const reservasSchema = mongoose.Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    select: String ,   
    select1: String,
    marca: String,
    color: String,
    code: String,
    fecha: String,
    hora: String,
})

module.exports = mongoose.model('Reservas', reservasSchema)