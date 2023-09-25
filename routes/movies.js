const express = require('express')
const router = express.Router()
const controller = require('../controllers/movies')

router.get('/movies/:id', controller.moviesGet)


module.exports = router