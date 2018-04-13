const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      ctrl = require('./controller')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.SERVER_PORT || 4000

app.get(`/api/houses`, ctrl.getAll)
app.post(`/api/house`, ctrl.create)

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
}).catch(console.error)

