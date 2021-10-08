const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('Get Request Gotten, lol')
  res.json({ message: "It's working." })
})

module.exports = router
