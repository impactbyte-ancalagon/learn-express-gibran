const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/', (req, res) => {
  res.send('bakwan')
})

app.get('/coba_param/:id/', (req, res) => {
  res.send('People id: ' + req.params.id)
})

app.get('/coba_query', (req, res) => {
  res.send(req.query.bakwan + ' ' + req.query.gayung)
})

app.post('/coba_body', (req, res) => {
  res.send(req.body.gayung)
})

app.listen(3000, () => console.log('3000'))
