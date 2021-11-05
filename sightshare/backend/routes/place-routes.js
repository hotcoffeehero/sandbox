const express = require('express')
const router = express.Router()

const HttpError = require('../models/http-error')

const placeControllers = require('../controllers/places-controllers')


router.get('/:pid', placeControllers.getPlaceById)

router.get('/user/:uid', placeControllers.getPlaceByUserId)

module.exports = router
