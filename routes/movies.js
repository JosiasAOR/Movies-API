const express = require('express')
const router = express.Router()
const controller = require('../controllers/movies')

router.get('/movies', controller.exibirVideos)
router.get('/movies/:id', controller.reproduzir)


module.exports = router