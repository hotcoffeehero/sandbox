const express = require('express')
const bodyParser = require('body-parser')

const placeRoutes = require('./routes/place-routes')
const app = express()

app.use('/api/places', placeRoutes)

app.listen(5000, () => {
  console.log('Go on 5000')
})
