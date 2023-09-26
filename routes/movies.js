const express = require('express')
const router = express.Router()
const controller = require('../controllers/movies')

router.get('/', controller.exibirVideos)


module.exports = router