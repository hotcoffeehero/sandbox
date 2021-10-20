const express = require('express')
const router = express.Router()

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'The coolest place in New York City',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY, 10001',
    creator: 'u1',
  },
]

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId
  })

  if (!place) {
    const error = new Error("...couldn't find what you were looking for.")
    error.code(404)
    throw error
  }

  res.json({ place })
})

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId
  })

  if (!place) {
    const error = new Error("...couldn't find what you were looking for.")
    error.code(404)
    next(error)
  }
  res.json({ place })
})

module.exports = router
