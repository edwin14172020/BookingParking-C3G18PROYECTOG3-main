const express = require('express')
const router = express.Router()
const passport = require('passport')
const bookingsContoller = require('../controllers/bookings.controller')
const usersContoller = require('../controllers/users.controller')
const helpers = require('../lib/helpers')
//Definir rutas
router.get('/bookings', bookingsContoller.getAll)
router.get('/booking/:code', bookingsContoller.getById)
router.post('/booking', bookingsContoller.create)
router.put('/booking/:id', bookingsContoller.update)
router.delete('/booking/:id', bookingsContoller.delete)
router.post('/user', helpers.encryptPassword, usersContoller.create)
router.get('/users', usersContoller.getAll)

router.post('/login', passport.authenticate('local.login', {
    //failureRedirect: '/',
    failureFlash: true,
    session: false,
}), (req, res) => {
    req.user.loggedin = true
    res.status(200).json(req.user)
})

module.exports = router